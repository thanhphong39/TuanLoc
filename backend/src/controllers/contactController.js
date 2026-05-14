const Contact = require("../models/Contact");

// POST /api/contacts  — gửi yêu cầu từ form website
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/contacts  — admin xem danh sách
const getContacts = async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [contacts, total] = await Promise.all([
      Contact.find().skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
      Contact.countDocuments(),
    ]);

    res.json({ contacts, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/contacts/:id  — admin xóa
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createContact, getContacts, deleteContact };
