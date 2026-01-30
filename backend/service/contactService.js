const Contact = require("../models/Contact");

const createContact = async (contactData) => {
  const contact = new Contact(contactData);
  return await contact.save();
};

const getAllContacts = async () => {
  return await Contact.find();
};

module.exports = {
  createContact,
  getAllContacts,
};
