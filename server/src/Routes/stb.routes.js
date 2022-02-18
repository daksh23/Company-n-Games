const express = require("express");
const Router = express.Router();
const multer = require('multer');
var path = require('path');
var stbController = require('../controllers/stb.controller');

var storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join(__dirname, '../images/stb'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

var upload = multer({ storage: storage});

Router.post("/stb_image", upload.single('image'), stbController.setBossImage);

module.exports = Router;