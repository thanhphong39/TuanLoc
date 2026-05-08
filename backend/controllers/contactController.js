const Contact = require('../models/Contact');

// @desc    Gửi form liên hệ
// @route   POST /api/contacts
// @access  Public
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    const contact = await Contact.create({
      name, email, phone, company, service, message,
      source: 'website',
    });

    res.status(201).json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
      data: { _id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Lấy tất cả contacts (admin)
// @route   GET /api/contacts
// @access  Private
const getContacts = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status) query.status = status;

    const total = await Contact.countDocuments(query);
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: contacts,
      pagination: { total, page: Number(page), pages: Math.ceil(total / limit), limit: Number(limit) },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Cập nhật status liên hệ
// @route   PATCH /api/contacts/:id/status
// @access  Private
const updateContactStatus = async (req, res, next) => {
  try {
    const { status, note } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, ...(note && { note }) },
      { new: true }
    );

    if (!contact) return res.status(404).json({ success: false, message: 'Liên hệ không tìm thấy' });

    res.json({ success: true, message: 'Cập nhật trạng thái thành công', data: contact });
  } catch (error) {
    next(error);
  }
};

// @desc    Xóa liên hệ
// @route   DELETE /api/contacts/:id
// @access  Private
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ success: false, message: 'Liên hệ không tìm thấy' });

    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Xóa liên hệ thành công' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createContact, getContacts, updateContactStatus, deleteContact };
