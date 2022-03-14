const express = require("express");
const Router = express.Router();
const puzzleController = require("../Controllers/puzzle.controller");
const multer = require("multer");
var path = require("path");
const verifyToken = require("../Middlewares/jwtVerify");

var storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join(__dirname, "../images"));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

var upload = multer({storage: storage});

Router.post("/send_challenge", upload.single("puzzleImage"), puzzleController.sendChanllenge);

Router.get("/get_challenges", puzzleController.getChanllenges);

Router.get("/get_puzzle/:_id",puzzleController.getPuzzle);

Router.post("/submit_puzzle",puzzleController.submitPuzzle);

Router.get("/get_history", puzzleController.getHistory);

Router.get("/puzzle_img", puzzleController.getPuzzleImg);

module.exports = Router;
