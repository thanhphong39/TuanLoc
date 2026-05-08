const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Họ tên không được để trống'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email không được để trống'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Số điện thoại không được để trống'],
      trim: true,
    },
    company: {
      type: String,
      default: '',
    },
    service: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: [true, 'Nội dung không được để trống'],
    },
    status: {
      type: String,
      enum: ['new', 'reading', 'replied', 'closed'],
      default: 'new',
    },
    note: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: 'website',
    },
  },
  { timestamps: true }
);

contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);
