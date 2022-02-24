require('dotenv').config();
const mongoose = require('mongoose');

const PuzzleModel = mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Need User ID']
    },
    send: [
        {
            type: String
        }
    ],
    recieve: [
        {
            type: String
        }
    ]
});

const Puzzle = mongoose.model('Profile', PuzzleModel);

module.exports = Puzzle;