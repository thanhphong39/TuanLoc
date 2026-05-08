const Product = require('../models/Product');
const { slugify } = require('../utils/slugify');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const path = require('path');

// Helper function to upload to Cloudinary and delete local file
const uploadToCloudinary = async (filePath, folder = 'products') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `tuanloc/${folder}`,
      use_filename: true,
    });
    // Delete local file after upload
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};

// @desc    Lấy tất cả sản phẩm
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
  try {
    const { category, featured, search, page = 1, limit = 12 } = req.query;
    const query = { isActive: true };

    if (category) query.categoryName = { $regex: category, $options: 'i' };
    if (featured === 'true') query.isFeatured = true;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } },
      ];
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name slug')
      .sort({ isFeatured: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: products,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        limit: Number(limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Lấy sản phẩm theo slug/id
// @route   GET /api/products/:id
// @access  Public
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    let product;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id).populate('category', 'name slug');
    } else {
      product = await Product.findOne({ slug: id, isActive: true }).populate('category', 'name slug');
    }

    if (!product) {
      return res.status(404).json({ success: false, message: 'Sản phẩm không tìm thấy' });
    }

    await Product.findByIdAndUpdate(product._id, { $inc: { viewCount: 1 } });

    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// @desc    Tạo sản phẩm mới
// @route   POST /api/products
// @access  Private
const createProduct = async (req, res, next) => {
  try {
    const { name, ...rest } = req.body;

    const baseSlug = slugify(name);
    let slug = baseSlug;
    let counter = 1;
    while (await Product.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    let thumbnail = '';
    let galleryImages = [];

    if (req.files) {
      if (req.files.thumbnail) {
        thumbnail = await uploadToCloudinary(req.files.thumbnail[0].path);
      }
      if (req.files.images) {
        const uploadPromises = req.files.images.map(file => uploadToCloudinary(file.path));
        galleryImages = await Promise.all(uploadPromises);
        if (!thumbnail && galleryImages.length > 0) thumbnail = galleryImages[0];
      }
    }

    let specifications = rest.specifications;
    if (typeof specifications === 'string') {
      try { specifications = JSON.parse(specifications); } catch { specifications = []; }
    }

    const product = await Product.create({
      name,
      slug,
      thumbnail,
      galleryImages,
      specifications: specifications || [],
      ...rest,
    });

    res.status(201).json({
      success: true,
      message: 'Tạo sản phẩm thành công',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Cập nhật sản phẩm
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Sản phẩm không tìm thấy' });
    }

    const updateData = { ...req.body };

    if (req.body.name && req.body.name !== product.name) {
      const baseSlug = slugify(req.body.name);
      let slug = baseSlug;
      let counter = 1;
      while (await Product.findOne({ slug, _id: { $ne: req.params.id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      updateData.slug = slug;
    }

    if (req.files) {
      if (req.files.thumbnail) {
        updateData.thumbnail = await uploadToCloudinary(req.files.thumbnail[0].path);
      }
      if (req.files.images) {
        const uploadPromises = req.files.images.map(file => uploadToCloudinary(file.path));
        const newImages = await Promise.all(uploadPromises);
        updateData.galleryImages = [...(product.galleryImages || []), ...newImages];
      }
    }

    if (typeof updateData.specifications === 'string') {
      try { updateData.specifications = JSON.parse(updateData.specifications); } catch { delete updateData.specifications; }
    }

    product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, message: 'Cập nhật sản phẩm thành công', data: product });
  } catch (error) {
    next(error);
  }
};

// @desc    Xóa sản phẩm
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Sản phẩm không tìm thấy' });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: 'Xóa sản phẩm thành công' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };

