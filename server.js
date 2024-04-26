// Settings
require("dotenv").config();
const port = process.env.PORT || 3000;

// Express Middleware
const express = require("express");

// Local modules
const mongodb = require("./data/database");

const app = express();

// Routes
app.use("/", require("./routes"));

// Initialize the database
mongodb.initDatabase((error) => {
  if (error) {
    console.log(error);
  } else {
    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on localhost:${port}`);
    });
  }
});