const express = require('express');
const router = express.Router();
const {
  getServices, getService, createService, updateService, deleteService,
} = require('../controllers/serviceController');
const { protect } = require('../middleware/auth');
const { uploadImage } = require('../middleware/upload');

const uploadFields = uploadImage.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'bannerImage', maxCount: 1 },
]);

router.get('/', getServices);
router.get('/:id', getService);
router.post('/', protect, uploadFields, createService);
router.put('/:id', protect, uploadFields, updateService);
router.delete('/:id', protect, deleteService);

module.exports = router;
