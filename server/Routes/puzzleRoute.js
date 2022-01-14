const express = require("express");
const app = express.Router();
const puzzleController = require('../Controllers/puzzleController')

app.get("/puzzle_img", puzzleController.getPuzzleImg);

module.exports = app;