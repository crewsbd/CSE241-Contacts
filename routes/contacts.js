// Users route
const route = require('express').Router();

// Controllers
const contactsController = require('../controllers/contacts');

// Endpoints
route.get('/', contactsController.getAll);
route.get('/:id', contactsController.getSingle);
route.post('/:id', contactsController.createSingle);
route.put('/:id', contactsController.updateSingle);
route.delete('/:id', contactsController.deleteSingle);

// Module export
module.exports = route;
