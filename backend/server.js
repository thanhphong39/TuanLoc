const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
  : ["http://localhost:3000", "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Cho phép requests không có origin (ví dụ: mobile apps, curl)
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: Origin '${origin}' not allowed`));
    },
    credentials: true,
  })
);
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

// Multer error handler (file size / type)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.name === "MulterError" || err.message === "Only image files are allowed") {
    return res.status(400).json({ message: err.message });
  }
  // General error handler — trả về JSON thay vì HTML
  console.error(err.stack);
  res.status(err.status ?? 500).json({ message: err.message ?? "Internal Server Error" });
});

// Export for Vercel serverless
module.exports = app;

// Local development server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
