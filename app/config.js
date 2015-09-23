/**
 * Module dependencies.
 */
var path = require('path');

module.exports = {
    PORT: process.env.PORT || 3000,
    STATIC_ROOT: path.join(__dirname, '../public')
};