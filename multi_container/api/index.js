"use strict";


var path = require("path");
var fastify = require('fastify')();
var redisClient = require(path.resolve(process.cwd(), "drivers", "redis"));
const { promisify } = require("util");
const PING = promisify(redisClient.PING).bind(redisClient);

redisClient.PING(function (error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});


fastify.get('/', async function (request, reply) {

    var out = {
        redis: await PING()
    };

    reply.send(out);
});


fastify.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log("server listening on: " + JSON.stringify(fastify.server.address()));
});