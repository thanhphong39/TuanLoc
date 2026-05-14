const Post = require("../models/Post");
const { uploadToCloudinary } = require("../config/cloudinary");

// GET /api/posts
const getPosts = async (req, res) => {
  try {
    const { badge, page = 1, limit = 10 } = req.query;
    const filter = badge ? { badge } : {};
    const skip = (Number(page) - 1) * Number(limit);

    const [posts, total] = await Promise.all([
      Post.find(filter).skip(skip).limit(Number(limit)).sort({ date: -1 }),
      Post.countDocuments(filter),
    ]);

    res.json({ posts, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/posts/:id
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/posts
const createPost = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = await uploadToCloudinary(req.file.buffer, "tuanloc/posts");
    }

    const post = await Post.create(data);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/posts/:id
const updatePost = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = await uploadToCloudinary(req.file.buffer, "tuanloc/posts");
    }

    const post = await Post.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/posts/:id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
