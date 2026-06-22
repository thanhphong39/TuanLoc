const Project = require("../models/Project");
const { uploadToCloudinary } = require("../config/cloudinary");

const parseJson = (str, fallback = []) => {
  if (!str) return fallback;
  try { return JSON.parse(str); } catch { return fallback; }
};

const parseLines = (str) =>
  (str || "").split("\n").map((s) => s.trim()).filter(Boolean);

// GET /api/projects
const getProjects = async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const filter = category ? { category } : {};
    const skip = (Number(page) - 1) * Number(limit);

    const [projects, total] = await Promise.all([
      Project.find(filter).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
      Project.countDocuments(filter),
    ]);

    res.json({ projects, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/projects/:id
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/projects
const createProject = async (req, res) => {
  try {
    const data = { ...req.body };
    data.large = data.large === "true" || data.large === true;
    data.outcomes = parseLines(data.outcomes);
    data.keyMetrics = parseJson(data.keyMetrics, []);
    data.scope = parseJson(data.scope, []);
    data.challenges = parseJson(data.challenges, []);

    const files = req.files || {};

    if (files.image && files.image[0]) {
      data.image = await uploadToCloudinary(files.image[0].buffer, "tuanloc/projects");
    }

    if (files.galleryImages && files.galleryImages.length > 0) {
      data.galleryImages = await Promise.all(
        files.galleryImages.map((f) => uploadToCloudinary(f.buffer, "tuanloc/projects"))
      );
    }

    const project = await Project.create(data);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/projects/:id
const updateProject = async (req, res) => {
  try {
    const data = { ...req.body };
    data.large = data.large === "true" || data.large === true;

    // Only overwrite structured fields if they were explicitly sent
    if ("outcomes" in req.body) data.outcomes = parseLines(data.outcomes);
    else delete data.outcomes;
    if ("keyMetrics" in req.body) data.keyMetrics = parseJson(data.keyMetrics, []);
    else delete data.keyMetrics;
    if ("scope" in req.body) data.scope = parseJson(data.scope, []);
    else delete data.scope;
    if ("challenges" in req.body) data.challenges = parseJson(data.challenges, []);
    else delete data.challenges;

    const files = req.files || {};

    if (files.image && files.image[0]) {
      data.image = await uploadToCloudinary(files.image[0].buffer, "tuanloc/projects");
    }

    if (files.galleryImages && files.galleryImages.length > 0) {
      data.galleryImages = await Promise.all(
        files.galleryImages.map((f) => uploadToCloudinary(f.buffer, "tuanloc/projects"))
      );
    }

    const project = await Project.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/projects/:id
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };
