const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (cached for serverless)
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
};

// Middleware: ensure DB is connected before every request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection error:", err.message);
    res.status(500).json({ message: "Database connection failed" });
  }
});

// Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/products", require("./src/routes/product"));
app.use("/api/contacts", require("./src/routes/contact"));
app.use("/api/posts", require("./src/routes/post"));
app.use("/api/projects", require("./src/routes/project"));

// Export for Vercel serverless
module.exports = app;

// Local development server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
