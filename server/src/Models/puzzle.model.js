require("dotenv").config();
const mongoose = require("mongoose");

const PuzzleModel = mongoose.Schema({
  send: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  masterImage: { type: String },
  puzzleImages: [String],
  allocatedTime: { type: Number },
  takenTime: { type: Number },
  status: { type: String, default: "PENDING", enum: ["PENDING", "COMPLETED"] },
});

const Puzzle = mongoose.model("puzzle", PuzzleModel);

module.exports = Puzzle;
