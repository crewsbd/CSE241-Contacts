// Users controller
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

/**
 * Get all users
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const getAll = async (request, response) => {
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

const createSingle = async (request, response) => {
  const userId = new ObjectId(request.params.id);
};

const updateSingle = async (request, response) => {
  const userId = new ObjectId(request.params.id);
};

const deleteSingle = async (request, response) => {};

module.exports = {
  getAll,
  getSingle,
  createSingle,
  updateSingle,
  deleteSingle,
};
