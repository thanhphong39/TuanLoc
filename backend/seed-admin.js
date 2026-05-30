require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./src/models/Admin");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  const username = "tuanlocco.hcm@gmail.com";
  const password = "Tuanloc 248979";

  const existing = await Admin.findOne({ username });
  if (existing) {
    existing.password = password;
    await existing.save();
    console.log(`✓ Đã cập nhật mật khẩu cho tài khoản: ${username}`);
  } else {
    await Admin.create({ username, password });
    console.log(`✓ Đã tạo tài khoản admin: ${username}`);
  }

  await mongoose.disconnect();
  console.log("Hoàn thành!");
}

seed().catch((e) => { console.error(e.message); process.exit(1); });
