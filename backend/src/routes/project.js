const express = require("express");
const router = express.Router();
const { getProjects, getProject, createProject, updateProject, deleteProject } = require("../controllers/projectController");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");

const projectUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "galleryImages", maxCount: 10 },
]);

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", protect, projectUpload, createProject);
router.put("/:id", protect, projectUpload, updateProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;
