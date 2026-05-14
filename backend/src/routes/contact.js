const express = require("express");
const router = express.Router();
const { createContact, getContacts, deleteContact } = require("../controllers/contactController");
const protect = require("../middleware/auth");

router.post("/", createContact);           // public — form website
router.get("/", protect, getContacts);     // admin only
router.delete("/:id", protect, deleteContact); // admin only

module.exports = router;
