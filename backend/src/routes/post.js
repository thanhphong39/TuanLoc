const express = require("express");
const router = express.Router();
const { getPosts, getPost, createPost, updatePost, deletePost } = require("../controllers/postController");
const upload = require("../middleware/upload");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", upload.single("image"), createPost);
router.put("/:id", upload.single("image"), updatePost);
router.delete("/:id", deletePost);

module.exports = router;
