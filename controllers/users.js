// Users controller
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

require("express").request;

/**
 * Get all users
 * @param {import('express').request} request
 * @param {import('express').response} response
 */
const getAll = async (request, response) => {
  const result = await mongodb.getDatabase().db().collection("users").find();
  result.toArray().then((users) => {
    response.setHeader("Content-Type", "application/json");
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
    .collection("users")
    .find({ _id: userId });
  result.toArray().then((users) => {
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(users);
  });
};

module.exports = { getAll, getSingle };
