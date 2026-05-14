const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: "Username and password are required" });

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const match = await admin.comparePassword(password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/auth/register  — chỉ dùng 1 lần để tạo tài khoản admin
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const exists = await Admin.findOne({ username });
    if (exists) return res.status(400).json({ message: "Username already exists" });

    const admin = await Admin.create({ username, password });
    res.status(201).json({ message: "Admin created", username: admin.username });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { login, register };
