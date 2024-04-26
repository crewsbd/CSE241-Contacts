// Users route
const route = require('express').Router();

// Controllers
const usersController = require("../controllers/users");

// Endpoints
route.get("/", usersController.getAll);
route.get("/:id", usersController.getSingle);

// Module export
module.exports = route;