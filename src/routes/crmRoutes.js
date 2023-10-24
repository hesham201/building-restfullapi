const {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContacts,
  deleteContacts,
} = require("../controllers/crmController");
const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactWithID)
    .put(updateContacts)
    .delete(deleteContacts);
};
module.exports = routes;
