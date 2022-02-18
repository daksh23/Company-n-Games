const express = require("express");
const Router = express.Router();
const puzzleController = require('../Controllers/puzzle.controller')

Router.get("/puzzle_img", puzzleController.getPuzzleImg);

module.exports = Router;