const Project = require('../models/Project');
const { slugify } = require('../utils/slugify');

// @desc    Lấy tất cả dự án
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res, next) => {
  try {
    const { category, featured, page = 1, limit = 9 } = req.query;
    const query = { isActive: true };

    if (category) query.category = { $regex: category, $options: 'i' };
    if (featured === 'true') query.isFeatured = true;

    const total = await Project.countDocuments(query);
    const projects = await Project.find(query)
      .sort({ isFeatured: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: projects,
      pagination: { total, page: Number(page), pages: Math.ceil(total / limit), limit: Number(limit) },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Lấy dự án theo id/slug
// @route   GET /api/projects/:id
// @access  Public
const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    let project;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      project = await Project.findById(id);
    } else {
      project = await Project.findOne({ slug: id, isActive: true });
    }

    if (!project) return res.status(404).json({ success: false, message: 'Dự án không tìm thấy' });

    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Tạo dự án mới
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res, next) => {
  try {
    const { title, ...rest } = req.body;

    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 1;
    while (await Project.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    const gallery = [];
    let thumbnail = '', beforeImage = '', afterImage = '';

    if (req.files) {
      if (req.files.gallery) {
        req.files.gallery.forEach(f => gallery.push(`/uploads/images/${f.filename}`));
        if (!thumbnail) thumbnail = gallery[0];
      }
      if (req.files.thumbnail) thumbnail = `/uploads/images/${req.files.thumbnail[0].filename}`;
      if (req.files.beforeImage) beforeImage = `/uploads/images/${req.files.beforeImage[0].filename}`;
      if (req.files.afterImage) afterImage = `/uploads/images/${req.files.afterImage[0].filename}`;
    }

    // Parse nested objects
    let client = rest.client;
    let projectInfo = rest.projectInfo;
    if (typeof client === 'string') { try { client = JSON.parse(client); } catch { client = {}; } }
    if (typeof projectInfo === 'string') { try { projectInfo = JSON.parse(projectInfo); } catch { projectInfo = {}; } }

    const project = await Project.create({
      title, slug, gallery, thumbnail, beforeImage, afterImage,
      client: client || {}, projectInfo: projectInfo || {},
      ...rest,
    });

    res.status(201).json({ success: true, message: 'Tạo dự án thành công', data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Cập nhật dự án
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = async (req, res, next) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Dự án không tìm thấy' });

    const updateData = { ...req.body };

    if (req.body.title && req.body.title !== project.title) {
      const baseSlug = slugify(req.body.title);
      let slug = baseSlug;
      let counter = 1;
      while (await Project.findOne({ slug, _id: { $ne: req.params.id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      updateData.slug = slug;
    }

    if (req.files) {
      if (req.files.gallery) {
        const newGallery = req.files.gallery.map(f => `/uploads/images/${f.filename}`);
        updateData.gallery = [...(project.gallery || []), ...newGallery];
      }
      if (req.files.thumbnail) updateData.thumbnail = `/uploads/images/${req.files.thumbnail[0].filename}`;
      if (req.files.beforeImage) updateData.beforeImage = `/uploads/images/${req.files.beforeImage[0].filename}`;
      if (req.files.afterImage) updateData.afterImage = `/uploads/images/${req.files.afterImage[0].filename}`;
    }

    if (typeof updateData.client === 'string') { try { updateData.client = JSON.parse(updateData.client); } catch { delete updateData.client; } }
    if (typeof updateData.projectInfo === 'string') { try { updateData.projectInfo = JSON.parse(updateData.projectInfo); } catch { delete updateData.projectInfo; } }

    project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

    res.json({ success: true, message: 'Cập nhật dự án thành công', data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Xóa dự án
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Dự án không tìm thấy' });

    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Xóa dự án thành công' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };
