const {SECRET_KEY} = require('../config/config');
const UserModel = require('../Models/user.model')
const bcrypt = require('bcrypt');
const jswt = require('jsonwebtoken');
const ProfileModel = require('../Models/profile.model');
var mongoose = require('mongoose');

// signup
const signup = async(req, res) => {

    const {firstname, lastname, username, email, password} = req.body;

    console.log(req.body)

    const emailExists = await UserModel.findOne({email});
    const userNameexist = await ProfileModel.findOne({username}) // check if username exists

    if (emailExists) {
        return res.json({status: false, message: "Email Already Exists"});
    }

    if (userNameexist) {
        return res.json({status: false, message: "Username Already Exists"});
    }

    const hash = await bcrypt.hash(password, 10); // hash the password

    const user = new UserModel();
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = hash;
    await user.save();

    // username in profile
    const profile = new ProfileModel();
    profile.UserID = user._id;
    profile.username = username;
    await profile.save();

    console.log('user created')

    res.statusCode = 201;
    res.json({
        message: `successfully created user`
    }, statuscode);
}

// login
const login = async(req, res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({email});

    if (user) {
        var objectID = mongoose
            .Types
            .ObjectId(user._id);
    }

    if (!user || objectID == null) {
        return res.send({status: false,message: "User Not Found"});
    } else {

        const matchPassword = await bcrypt.compare(password, user.password);
        token = jswt.sign({
            id: user._id,
            email: user.email
        }, SECRET_KEY, {expiresIn: '2h'})

        if (matchPassword == true) {

            delete user.password;
            const profile = await ProfileModel
                .findOne({userID: objectID})
                .lean()

            // set generated token in header and verify in middleware
            res
                .header("auth-token", token)
                .json({
                    error: null,
                    data: {
                        token,
                        user,
                        profile
                    }
                });

        } else {
            return res.send({status: false, message:"Wrong ID or Password"});
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