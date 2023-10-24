const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a First Name",
  },
  lastName: {
    type: String,
    required: "Enter a Last Name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = ContactSchema;
