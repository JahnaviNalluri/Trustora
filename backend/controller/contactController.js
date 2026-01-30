const contactService = require("../service/contactService");

// SUBMIT CONTACT FORM
const submitContact = async (req, res) => {
  try {
    await contactService.createContact(req.body);
    res.status(201).json({ message: "Contact saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL CONTACTS
const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitContact,
  getAllContacts,
};
