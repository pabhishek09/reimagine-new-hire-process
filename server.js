const express = require("express"),
      dotenv = require('dotenv'),
      app = express();

// Get the environment config
dotenv.config();

// Start express
require('./server/express')(app, express);

// Initialize the app.
const server = app.listen(process.env.PORT || 3000, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});

