'use strict';

var path = require("path");
var mysql = require('mysql');
var config = require(path.resolve(process.cwd(), "config"));

var sphinxConnectionString = process.env.SPHINX_CONNECTION_STRING || `mysql://${config.SPHINX_HOST}/db?port=${config.SPHINX_PORT}`;

// var dbConnection = mysql.createPool({
//     host: config.SPHINX_HOST,
//     port: config.SPHINX_PORT
// });

var dbConnection = mysql.createPool(sphinxConnectionString);


module.exports = dbConnection;