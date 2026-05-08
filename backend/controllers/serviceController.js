const Service = require('../models/Service');
const { slugify } = require('../utils/slugify');

// @desc    Lấy tất cả dịch vụ
// @route   GET /api/services
// @access  Public
const getServices = async (req, res, next) => {
  try {
    const { featured } = req.query;
    const query = { isActive: true };
    if (featured === 'true') query.isFeatured = true;

    const services = await Service.find(query).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: services });
  } catch (error) {
    next(error);
  }
};

// @desc    Lấy dịch vụ theo slug/id
// @route   GET /api/services/:id
// @access  Public
const getService = async (req, res, next) => {
  try {
    const { id } = req.params;
    let service;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      service = await Service.findById(id);
    } else {
      service = await Service.findOne({ slug: id, isActive: true });
    }

    if (!service) {
      return res.status(404).json({ success: false, message: 'Dịch vụ không tìm thấy' });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

// @desc    Tạo dịch vụ mới
// @route   POST /api/services
// @access  Private
const createService = async (req, res, next) => {
  try {
    const { name, ...rest } = req.body;

    const baseSlug = slugify(name);
    let slug = baseSlug;
    let counter = 1;
    while (await Service.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    let thumbnail = '', bannerImage = '';
    if (req.files) {
      if (req.files.thumbnail) thumbnail = `/uploads/images/${req.files.thumbnail[0].filename}`;
      if (req.files.bannerImage) bannerImage = `/uploads/images/${req.files.bannerImage[0].filename}`;
    }

    // Parse arrays
    let features = rest.features;
    let process = rest.process;
    if (typeof features === 'string') { try { features = JSON.parse(features); } catch { features = []; } }
    if (typeof process === 'string') { try { process = JSON.parse(process); } catch { process = []; } }

    const service = await Service.create({
      name, slug, thumbnail, bannerImage,
      features: features || [],
      process: process || [],
      ...rest,
    });

    res.status(201).json({ success: true, message: 'Tạo dịch vụ thành công', data: service });
  } catch (error) {
    next(error);
  }
};

// @desc    Cập nhật dịch vụ
// @route   PUT /api/services/:id
// @access  Private
const updateService = async (req, res, next) => {
  try {
    let service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Dịch vụ không tìm thấy' });

    const updateData = { ...req.body };

    if (req.body.name && req.body.name !== service.name) {
      const baseSlug = slugify(req.body.name);
      let slug = baseSlug;
      let counter = 1;
      while (await Service.findOne({ slug, _id: { $ne: req.params.id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      updateData.slug = slug;
    }

    if (req.files) {
      if (req.files.thumbnail) updateData.thumbnail = `/uploads/images/${req.files.thumbnail[0].filename}`;
      if (req.files.bannerImage) updateData.bannerImage = `/uploads/images/${req.files.bannerImage[0].filename}`;
    }

    if (typeof updateData.features === 'string') { try { updateData.features = JSON.parse(updateData.features); } catch { delete updateData.features; } }
    if (typeof updateData.process === 'string') { try { updateData.process = JSON.parse(updateData.process); } catch { delete updateData.process; } }

    service = await Service.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

    res.json({ success: true, message: 'Cập nhật dịch vụ thành công', data: service });
  } catch (error) {
    next(error);
  }
};

// @desc    Xóa dịch vụ
// @route   DELETE /api/services/:id
// @access  Private
const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Dịch vụ không tìm thấy' });

    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Xóa dịch vụ thành công' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices, getService, createService, updateService, deleteService };
