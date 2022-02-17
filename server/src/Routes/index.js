const express = require("express");
const Router = express.Router();

const usersRoutes = require('./users.routes')
const puzzleRoutes = require('./puzzle.routes')

Router.use('/puzzle', puzzleRoutes);
Router.use('/user', usersRoutes );

module.exports = Router;