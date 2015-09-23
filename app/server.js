/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var config = require('./config.js');

exports.run = function () {
  /**
   * Configure the application server.
   */
  app.use(express.static(config.STATIC_ROOT));

  app.get('*', function (req, res) {
    res.sendFile('index.html', {
      root: config.STATIC_ROOT
    });
  });

  /**
   * Start the application server
   */
  app.listen(config.PORT, function () {
    console.log('Application server running on port ' + config.PORT);
  });
};