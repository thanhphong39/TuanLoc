const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", protect, upload.array("images", 10), createProduct);
router.put("/:id", protect, upload.array("images", 10), updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
