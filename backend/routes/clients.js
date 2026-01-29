const express = require("express");
const Client = require("../models/Client");

const router = express.Router();

// ADD CLIENT (Admin)
router.post("/", async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL CLIENTS (Landing Page)
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
