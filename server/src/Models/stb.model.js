require('dotenv').config();
const mongoose = require('mongoose');

const STBModel = mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'no user id provided']
    },
    BossImage: {
        type: String,
        required: [true, 'Pelase Select Image']
    }
});

const SmashTheBoss = mongoose.model('STB', STBModel);

module.exports = SmashTheBoss;