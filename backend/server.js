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

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");
    const Admin = require("./src/models/Admin");

 
    await Admin.deleteOne({ username: "admin" });
    await Admin.create({ username: "admin", password: "admin@6789" });

  })
  .catch((err) => console.error("MongoDB connection error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
