const Blog = require('../models/Blog');
const { slugify } = require('../utils/slugify');

// @desc    Lấy tất cả bài viết (public chỉ lấy published)
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res, next) => {
  try {
    const { category, featured, search, page = 1, limit = 9, admin } = req.query;
    const query = {};

    // Nếu không phải admin request, chỉ lấy published
    if (admin !== 'true') query.isPublished = true;

    if (category) query.category = { $regex: category, $options: 'i' };
    if (featured === 'true') query.isFeatured = true;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .select('-content') // Không lấy content trong list
      .sort({ isFeatured: -1, publishedAt: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: blogs,
      pagination: { total, page: Number(page), pages: Math.ceil(total / limit), limit: Number(limit) },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Lấy bài viết theo slug/id
// @route   GET /api/blogs/:slug
// @access  Public
const getBlog = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let blog;

    if (slug.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(slug);
    } else {
      blog = await Blog.findOne({ slug, isPublished: true });
    }

    if (!blog) return res.status(404).json({ success: false, message: 'Bài viết không tìm thấy' });

    // Tăng view count
    await Blog.findByIdAndUpdate(blog._id, { $inc: { viewCount: 1 } });

    // Lấy bài viết liên quan
    const related = await Blog.find({
      _id: { $ne: blog._id },
      category: blog.category,
      isPublished: true,
    }).select('title slug thumbnail excerpt createdAt').limit(3);

    res.json({ success: true, data: { ...blog.toObject(), related } });
  } catch (error) {
    next(error);
  }
};

// @desc    Tạo bài viết mới
// @route   POST /api/blogs
// @access  Private
const createBlog = async (req, res, next) => {
  try {
    const { title, ...rest } = req.body;

    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    let thumbnail = '';
    if (req.file) {
      thumbnail = `/uploads/images/${req.file.filename}`;
    }

    // Parse tags
    let tags = rest.tags;
    if (typeof tags === 'string') {
      try { tags = JSON.parse(tags); } catch { tags = tags.split(',').map(t => t.trim()); }
    }

    const publishedAt = rest.isPublished === 'true' || rest.isPublished === true ? new Date() : null;

    const blog = await Blog.create({
      title, slug, thumbnail, tags: tags || [],
      publishedAt,
      author: req.user?.name || 'Admin',
      ...rest,
    });

    res.status(201).json({ success: true, message: 'Tạo bài viết thành công', data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Cập nhật bài viết
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Bài viết không tìm thấy' });

    const updateData = { ...req.body };

    if (req.body.title && req.body.title !== blog.title) {
      const baseSlug = slugify(req.body.title);
      let slug = baseSlug;
      let counter = 1;
      while (await Blog.findOne({ slug, _id: { $ne: req.params.id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      updateData.slug = slug;
    }

    if (req.file) updateData.thumbnail = `/uploads/images/${req.file.filename}`;

    if (typeof updateData.tags === 'string') {
      try { updateData.tags = JSON.parse(updateData.tags); } catch { updateData.tags = updateData.tags.split(',').map(t => t.trim()); }
    }

    // Cập nhật publishedAt nếu publish lần đầu
    if ((updateData.isPublished === 'true' || updateData.isPublished === true) && !blog.publishedAt) {
      updateData.publishedAt = new Date();
    }

    blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

    res.json({ success: true, message: 'Cập nhật bài viết thành công', data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Xóa bài viết
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Bài viết không tìm thấy' });

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Xóa bài viết thành công' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
