const express = require('express');
const router = express.Router();
const {
  getProducts, getProduct, createProduct, updateProduct, deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/auth');
const { uploadFile } = require('../middleware/upload');

const uploadFields = uploadFile.fields([
  { name: 'images', maxCount: 10 },
  { name: 'thumbnail', maxCount: 1 },
  { name: 'pdfCatalog', maxCount: 1 },
]);

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', protect, uploadFields, createProduct);
router.put('/:id', protect, uploadFields, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
