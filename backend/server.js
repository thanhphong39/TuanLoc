const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/products", require("./src/routes/product"));
app.use("/api/contacts", require("./src/routes/contact"));
app.use("/api/posts", require("./src/routes/post"));
app.use("/api/projects", require("./src/routes/project"));

// MongoDB Connection (cached for serverless)
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB Connected");
};

connectDB().catch((err) =>
  console.error("MongoDB connection error:", err.message)
);

// Export for Vercel serverless
module.exports = app;

// Local development server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
