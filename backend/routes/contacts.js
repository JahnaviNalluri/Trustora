const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// SUBMIT CONTACT FORM (User)
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL CONTACTS (Admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
