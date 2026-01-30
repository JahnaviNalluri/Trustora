const express = require("express");
const clientController = require("../controller/clientController");

const router = express.Router();

// ADD CLIENT (Admin)
router.post("/", clientController.createClient);

// GET ALL CLIENTS (Landing Page)
router.get("/", clientController.getAllClients);

module.exports = router;
