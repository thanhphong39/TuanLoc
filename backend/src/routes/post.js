const express = require("express");
const router = express.Router();
const { getPosts, getPost, createPost, updatePost, deletePost } = require("../controllers/postController");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", protect, upload.single("image"), createPost);
router.put("/:id", protect, upload.single("image"), updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
