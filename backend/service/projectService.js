const Project = require("../models/Project");

const getAllProjects = async () => {
  return await Project.find();
};

const createProject = async (projectData) => {
  const project = new Project({
    name: projectData.name,
    image: projectData.image,
    description: projectData.description,
  });

  return await project.save(); // ✅ still critical, now in service
};

module.exports = {
  getAllProjects,
  createProject,
};
