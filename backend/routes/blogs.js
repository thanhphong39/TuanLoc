const express = require('express');
const router = express.Router();
const {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog,
} = require('../controllers/blogController');
const { protect } = require('../middleware/auth');
const { uploadImage } = require('../middleware/upload');

router.get('/', getBlogs);
router.get('/:slug', getBlog);
router.post('/', protect, uploadImage.single('thumbnail'), createBlog);
router.put('/:id', protect, uploadImage.single('thumbnail'), updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
