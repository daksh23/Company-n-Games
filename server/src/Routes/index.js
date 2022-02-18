const express = require("express");
const Router = express.Router();

const usersRoutes = require('./users.routes')
const puzzleRoutes = require('./puzzle.routes')
const stbRoutes = require('./stb.routes')

Router.use('/puzzle', puzzleRoutes);
Router.use('/user', usersRoutes );
Router.use('/stb',stbRoutes );

module.exports = Router;