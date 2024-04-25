// This file combines all route definitions.

const route = require("express").Router();

route.use("/sub1", require("./subroute1"));

// Main route
route.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = route;