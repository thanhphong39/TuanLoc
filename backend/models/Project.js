const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Tiêu đề dự án không được để trống'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    gallery: [
      {
        type: String,
      },
    ],
    beforeImage: {
      type: String,
      default: '',
    },
    afterImage: {
      type: String,
      default: '',
    },
    client: {
      name: { type: String, default: '' },
      industry: { type: String, default: '' },
      location: { type: String, default: '' },
      testimonial: { type: String, default: '' },
    },
    projectInfo: {
      area: { type: String, default: '' },
      duration: { type: String, default: '' },
      completedAt: { type: Date },
      value: { type: String, default: '' },
      scope: [{ type: String }],
    },
    services: [
      {
        type: String,
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    seo: {
      metaTitle: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

projectSchema.index({ slug: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ isFeatured: 1 });

module.exports = mongoose.model('Project', projectSchema);
