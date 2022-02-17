const express = require("express");
const app = express.Router();
const puzzleController = require('../Controllers/puzzle.controller')

app.get("/puzzle_img", puzzleController.getPuzzleImg);

module.exports = app;