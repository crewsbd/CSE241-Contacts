// Contacts controller
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

/**
 * Get all contacts
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const getAll = async (request, response) => {
  // #swagger.summary = 'Get all contacts'
  // #swagger.description = 'Returns all contacts in the database.'

  const result = await mongodb.getDatabase().db().collection('contacts').find();
  result.toArray().then((users) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(users);
  });
};

/**
 * Get a single user
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const getSingle = async (request, response) => {
  // #swagger.summary = 'Get a single contact'
  // #swagger.description = 'Return a single contact document corresponding to the supplied ID.'

  const userId = new ObjectId(request.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((users) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(users);
  });
};

/**
 * Create a new contact with the provided json data
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const createSingle = async (request, response) => {
  // #swagger.summary = 'Create a single contact'
  // #swagger.description = 'Adds one new contact document to the database. The ID is automatically generated and returned.'

  const newContact = request.body;
  const newDocument = {
    firstName: newContact.firstName,
    lastName: newContact.lastName,
    email: newContact.email,
    favoriteColor: newContact.favoriteColor,
    birthday: newContact.birthday,
  };

  const result = await mongodb.getDatabase().db().collection('contacts').insertOne(newDocument);

  response.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    response.status(200).json(result.insertedId.toJSON());
  } else {
    response.status(500).json(response.error || 'An error occured.');
  }
};

/**
 * Update or modify a document
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const updateSingle = async (request, response) => {
  // #swagger.summary = 'Modify one contact'
  // #swagger.description = 'Modifies or updates on contacts information with the provided json data. It is only necessary to include data that will change. Other fields will be untouched.'

  const userId = new ObjectId(request.params.id);
  const newContact = request.body;
  const newDocument = {};

  // Only add fields we need, otherwise we erase existing data
  for (let key in newContact) {
    newDocument[key] = newContact[key];
  }

  const result = await mongodb.getDatabase().db().collection('contacts').updateOne({ _id: userId }, { $set: newDocument });

  response.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    response.status(200).json({ modified: result.modifiedCount });
  } else {
    response.status(500).json(response.error || 'An error occured.');
  }
};

/**
 * Delete a single contact
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const deleteSingle = async (request, response) => {
  // #swagger.summary = 'Delete one contact'
  // #swagger.description = 'Deletes on contact that corresponds with the supplied id url parameter.'

  const userId = new ObjectId(request.params.id);
  const result = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: userId });

  response.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    response.status(200).json({ deleted: result.deletedCount });
  } else {
    response.status(500).json(response.error || 'An error occured.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createSingle,
  updateSingle,
  deleteSingle,
};
