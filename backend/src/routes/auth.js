const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");
const protect = require("../middleware/auth");

router.post("/login", login);
router.post("/register", protect, register); // chỉ admin đã đăng nhập mới được tạo admin mới

module.exports = router;
