const express = require("express");
const Router = express.Router();
const userController = require('../Controllers/users.controller');

const verifyToken = require('../Middlewares/jwtVerify');

Router.post('/signup', /* verifyToken ,*/ userController.signup);
Router.post('/login', userController.login);

module.exports = Router;