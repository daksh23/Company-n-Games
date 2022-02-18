require('dotenv').config();
const mongoose = require('mongoose');

const SmashTheBoss = mongoose.Schema({
    UserID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [
        true, 'no user id provided'
    ],},
    BossImage: {
        type: String,
        required: [
            true, 'Pelase Select Image'
        ],
    }
});

const User = mongoose.model('STB', SmashTheBoss);

module.exports = User;