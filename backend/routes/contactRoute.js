const express = require("express");
const {
  submitContact,
  getAllContacts,
} = require("../controller/contactController");

const router = express.Router();

// SUBMIT CONTACT FORM (User)
router.post("/", submitContact);

// GET ALL CONTACTS (Admin)
router.get("/", getAllContacts);

module.exports = router;
