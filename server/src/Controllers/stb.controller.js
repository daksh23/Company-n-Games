const stbModel = require('../models/stb.model');
var mongoose = require('mongoose');
var fs = require('fs');

const setBossImage = async (req, res) => {

    var objectID = mongoose.Types.ObjectId(req.body.userID);
    var user = await stbModel.findOne({ UserID: objectID });

    if (user) {
        fs.unlinkSync(user.BossImage);
        var stb = await stbModel.findOneAndUpdate({ UserID:objectID }, { BossImage: req.file.path });

        // Now delete exist image from server

        res.status(200).json({
            message: "Successfully Updated",
            stb
        });
    }else{
        var stb = await stbModel.create({
            UserID: objectID,
            BossImage: req.file.path
        });
        res.status(200).json({
            message: "Successfully Changed the Image",
            stb
        });
    }

}

const testing = ()  => {
    console.log('testing');
}

module.exports = {
    setBossImage,
    testing
}