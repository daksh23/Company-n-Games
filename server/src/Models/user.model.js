require('dotenv').config();
const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'The first name field is required!']
    },
    lastName: {
        type: String,
        required: [true, 'The last name field is required!']
    },
    email: {
        type: String,
        required: [
            true, 'The email field is required!'
        ],
        unique: 1
    },
    password: {
        type: String,
        required: [true, 'The password field is required!']
    },
});

const User = mongoose.model('User', userModel);

module.exports = User;