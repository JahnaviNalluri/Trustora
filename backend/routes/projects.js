const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

/* GET ALL PROJECTS */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ADD PROJECT */
router.post("/", async (req, res) => {
  try {
    const project = new Project({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description
    });

    const savedProject = await project.save(); // 🔴 THIS IS CRITICAL
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
