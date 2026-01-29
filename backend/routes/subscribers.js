const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

// SUBSCRIBE USER
router.post("/", async (req, res) => {
  try {
    const subscriber = new Subscriber(req.body);
    await subscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL SUBSCRIBERS (Admin)
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
