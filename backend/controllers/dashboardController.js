const Product = require('../models/Product');
const Service = require('../models/Service');
const Project = require('../models/Project');
const Blog = require('../models/Blog');
const Contact = require('../models/Contact');

// @desc    Lấy thống kê dashboard
// @route   GET /api/dashboard/stats
// @access  Private
const getDashboardStats = async (req, res, next) => {
  try {
    const [
      totalProducts,
      totalServices,
      totalProjects,
      totalBlogs,
      totalContacts,
      newContacts,
      publishedBlogs,
      featuredProducts,
    ] = await Promise.all([
      Product.countDocuments({ isActive: true }),
      Service.countDocuments({ isActive: true }),
      Project.countDocuments({ isActive: true }),
      Blog.countDocuments(),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
      Blog.countDocuments({ isPublished: true }),
      Product.countDocuments({ isFeatured: true }),
    ]);

    // Contacts trong 7 ngày gần đây
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentContacts = await Contact.find({ createdAt: { $gte: sevenDaysAgo } })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email phone service status createdAt');

    // Contacts theo ngày trong 7 ngày
    const contactsByDay = await Contact.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      success: true,
      data: {
        stats: {
          totalProducts,
          totalServices,
          totalProjects,
          totalBlogs,
          totalContacts,
          newContacts,
          publishedBlogs,
          featuredProducts,
        },
        recentContacts,
        contactsByDay,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDashboardStats };
