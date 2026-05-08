const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tên dịch vụ không được để trống'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    shortDescription: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    bannerImage: {
      type: String,
      default: '',
    },
    features: [
      {
        title: String,
        description: String,
        icon: String,
      },
    ],
    process: [
      {
        step: Number,
        title: String,
        description: String,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    seo: {
      metaTitle: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

serviceSchema.index({ slug: 1 });

module.exports = mongoose.model('Service', serviceSchema);
