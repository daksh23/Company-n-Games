const {SECRET_KEY} = require('../config/config');
const UserModel = require('../Models/user.model')
const bcrypt = require('bcrypt');
const jswt = require('jsonwebtoken');
const ProfileModel = require('../Models/profile.model');
var mongoose = require('mongoose');

// signup
const signup = async(req, res) => {

    const {firstname, lastname, email, password} = req.body;

    const exists = await UserModel.findOne({email}); // check if username exists

    if (exists) {
        res.statusCode = 409;
        return res.json({message: "Username Already Exists"});
    }

    // const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(password, 10); // hash the password

    const user = new UserModel();
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = hash;
    await user.save();

    console.log('user created')

    res.statusCode = 201;
    res.json({message: `User Added`, user});
}

// login
const login = async(req, res) => {
    const {email, password} = req.body;
    console.log(email, password)

    const user = await UserModel.findOne({email});
    var objectID = mongoose
        .Types
        .ObjectId(user._id);

    if (!user || objectID == null) {
        return res.send({message: "User Not Found"});
    } else {
        const matchPassword = await bcrypt.compare(password, user.password);
        token = jswt.sign({
            id: user._id,
            email: user.email
        }, SECRET_KEY, {expiresIn: '2h'})

        if (matchPassword == true) {

            // set generated token in header and verify in middleware
            res
                .header("auth-token", token)
                .json({
                    error: null,
                    data: {
                        token,
                        user
                    }
                });

        } else {
            return res.send("Wrong ID or Password");
        }
    }
}

// get & set profile
const getProfile = async(req, res) => {

    var objectID = mongoose
        .Types
        .ObjectId(req.body.userID);

    // get profile of user
    const profile = await ProfileModel.findOne({UserID: objectID});

    res
        .send('data')
        .json({profile})

}

const setProfile = async(req, res) => {

    var {UserID, username} = req.body;
    var objectID = mongoose
        .Types
        .ObjectId(UserID);
    var image = req.file.path;

    const profile = new ProfileModel();
    profile.UserID = objectID;
    profile.profileImage = image;
    console.log(profile)
    profile.username = username;
    await profile.save();

    res.statusCode = 201;
    res.json({message: `Profile Added`, profile});

}

const updateProfile = async(req, res) => {

    var {UserID, username} = req.body;
    var objectID = mongoose
        .Types
        .ObjectId(UserID);
    var image = req.file.path;

    const profile = await ProfileModel.findOneAndUpdate({
        UserID: objectID
    }, {
        profileImage: image,
        username: username
    });

    res.statusCode = 201;
    res.json({message: `Profile Updated`, profile});

}

module.exports = {
    signup,
    login,
    getProfile,
    setProfile,
    updateProfile
}