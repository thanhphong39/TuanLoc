const express = require('express');
const router = express.Router();
const {
  createContact, getContacts, updateContactStatus, deleteContact,
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

router.post('/', createContact);
router.get('/', protect, getContacts);
router.patch('/:id/status', protect, updateContactStatus);
router.delete('/:id', protect, deleteContact);

module.exports = router;
