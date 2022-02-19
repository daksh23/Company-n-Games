require('dotenv').config();
const mongoose = require('mongoose');

const ProfileModel = mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Need User ID']
    },
    username: {
        type: String
    },
    profileImage: {
        type: String,
    }
});

const Profile = mongoose.model('Profile', ProfileModel);

module.exports = Profile;