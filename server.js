const express = require('express');

const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => res.send("<h2>Welcome to My NDB4 Project!</h2>"));

server.use("/api/recipes", RecipesRouter);

module.exports = server;