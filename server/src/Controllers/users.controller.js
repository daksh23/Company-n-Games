const {SECRET_KEY} = require('../config/config');
const UserModel = require('../Models/user.model')
const bcrypt = require('bcrypt');
const jswt = require('jsonwebtoken');
const User = require('../Models/user.model');


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
    const { email, password} = req.body;

    const user = await UserModel.findOne({email});

    const matchPassword = await bcrypt.compare(password, user.password);

    token =  jswt.sign({id:user._id,email:user.email}, SECRET_KEY,{ expiresIn: '2h'})
    
    if(matchPassword == true){

      // set generated token in header and verify in middleware
      res.header("auth-token", token).json({
        error: null,
        data: {
          token, user
        },
      });


    }
    else{
      return res.send("Wrong ID or Password");
    }

    // verifyToken(token);

}

const verifyToken = async(tokenStr) => {

}



module.exports = {
    signup,
    login
}