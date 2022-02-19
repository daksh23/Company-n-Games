const express = require("express");
const Router = express.Router();
const multer = require('multer');
var path = require('path');
const userController = require('../Controllers/users.controller');
const verifyToken = require('../Middlewares/jwtVerify');


// multer for store image
var storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join(__dirname, '../images/Profiles'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

var upload = multer({ storage: storage});

Router.post('/signup', /* verifyToken ,*/ userController.signup);
Router.post('/login', userController.login);

// profile apis
Router.get('/profile', /* verifyToken ,*/ userController.getProfile);
Router.post('/set-profile', /* verifyToken ,*/ upload.single('profile'), userController.setProfile);
Router.post('/update-profile', /* verifyToken ,*/ userController.updateProfile);

module.exports = Router;