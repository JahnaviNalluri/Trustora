const express = require("express");
const {
  getAllProjects,
  createProject,
} = require("../controller/projectController");

const router = express.Router();

/* GET ALL PROJECTS */
router.get("/", getAllProjects);

/* ADD PROJECT */
router.post("/", createProject);

module.exports = router;
