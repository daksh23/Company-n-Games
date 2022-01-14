const express = require("express");
const app = express.Router();
const puzzleRoutes = require("./puzzleRoute");

app.use('/puzzle', puzzleRoutes);

module.exports = app;