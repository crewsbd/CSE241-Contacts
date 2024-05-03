// Settings
require('dotenv').config();
const port = process.env.PORT || 3000;

// Express Middleware
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

// Local modules
const mongodb = require('./data/database');

const app = express();

// Middleware
app.use(cors({
  methods: 'GET,POST,PUT,DELETE'
}));
app.use('/', bodyParser.urlencoded( {extended: false}));
app.use('/', bodyParser.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger/swagger-document.json')))

// Routes
app.use('/', require('./routes'));

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
