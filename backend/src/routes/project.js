const express = require("express");
const router = express.Router();
const { getProjects, getProject, createProject, updateProject, deleteProject } = require("../controllers/projectController");
const upload = require("../middleware/upload");

const projectUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "galleryImages", maxCount: 10 },
]);

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", projectUpload, createProject);
router.put("/:id", projectUpload, updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
