// Users route
const route = require('express').Router();

// Controllers
const contactsController = require("../controllers/contacts");

// Endpoints
route.get("/", contactsController.getAll);
route.get("/:id", contactsController.getSingle);

// Module export
module.exports = route;