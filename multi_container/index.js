"use strict";


var path = require("path");
var redisClient = require(path.resolve(process.cwd(), "drivers", "redis"));

redisClient.PING(function (error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});