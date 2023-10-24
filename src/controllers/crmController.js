const mongoose = require("mongoose");
const ContactSchema = require("../models/crmModel");
const Contact = mongoose.model("Contact", ContactSchema);

const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
};
const getContacts = async (req, res) => {
  try {
    // Use the Mongoose model 'Contact' to find all contacts in the database.
    const contacts = await Contact.find({});

    // Send the retrieved contacts as a JSON response.
    res.json(contacts);
  } catch (error) {
    // Handle any errors that occur during the database operation.
    // For example, if there's an issue with the query or the database connection.
    res.status(500).json({ error: error.message });
  }
};
const getContactWithID = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Clean the contact data by converting it to a plain JavaScript object
    const cleanedContact = contact.toObject();

    res.json(cleanedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateContacts = async (req, res) => {
  try {
    // Use async/await with findOneAndUpdate
    const updatedContact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Clean the updated contact data by converting it to a plain JavaScript object
    const cleanedContact = updatedContact.toObject();

    res.json(cleanedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteContacts = async (req, res) => {
  try {
    const contact = Contact.deleteOne({ _id: req.params.contactId });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "successfully Delted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContacts,
  deleteContacts,
};
