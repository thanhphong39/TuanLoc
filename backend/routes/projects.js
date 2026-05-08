const express = require('express');
const router = express.Router();
const {
  getProjects, getProject, createProject, updateProject, deleteProject,
} = require('../controllers/projectController');
const { protect } = require('../middleware/auth');
const { uploadImage } = require('../middleware/upload');

const uploadFields = uploadImage.fields([
  { name: 'gallery', maxCount: 20 },
  { name: 'thumbnail', maxCount: 1 },
  { name: 'beforeImage', maxCount: 1 },
  { name: 'afterImage', maxCount: 1 },
]);

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', protect, uploadFields, createProject);
router.put('/:id', protect, uploadFields, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
