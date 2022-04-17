var imageToSlices = require("image-to-slices");
var fs = require("fs");
const path = require("path");
const Puzzle = require("../Models/puzzle.model");
const Profile = require("../Models/profile.model");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const basicPath = "http://localhost:3030";

// data url regx
var regex = /^data:.+\/(.+);base64,(.*)$/;

const shuffleImages = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const getPuzzleImg = (req, res) => {
  imageToSlices.configure({
    clipperOptions: {
      canvas: require("canvas"),
    },
  });

  var lineXArray = [100, 200];
  var lineYArray = [100, 200];
  var source =
    "http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg";

  imageToSlices(
    source,
    lineXArray,
    lineYArray,
    {
      // saveToDir: 'imagesHere/'
      saveToDataUrl: true,
    },
    function (dataUrlList) {
      console.log(dataUrlList.length);
      var i = 0;
      console.log("enter in loop");
      for (i; i < dataUrlList.length; i++) {
        var matches = dataUrlList[i].dataURI.match(regex);
        var ext = matches[1];
        var data = matches[2];
        var buffer = Buffer.from(data, "base64");

        //store buffer-images into specific folder

        const filePath = path.join(__dirname, `../images/data-${i}.` + ext);
        fs.writeFileSync(filePath, buffer);
      }
      console.log("exit loop");
    }
  );

  return console.log("puzzle img");
};

const createSlices = async (imagePath, _id) => {
  imageToSlices.configure({
    clipperOptions: {
      canvas: require("canvas"),
    },
  });

  var lineXArray = [100, 200];
  var lineYArray = [100, 200];
  var source = path.join(__dirname, `../images/${imagePath}`);

  imageToSlices(
    source,
    lineXArray,
    lineYArray,
    {
      // saveToDir: 'imagesHere/'
      saveToDataUrl: true,
    },
    function (dataUrlList) {
      var i = 0;
      let files = [];

      for (i; i < dataUrlList.length; i++) {
        var matches = dataUrlList[i].dataURI.match(regex);
        var ext = matches[1];
        var data = matches[2];
        var buffer = Buffer.from(data, "base64");

        //store buffer-images into specific folder

        const filePath = path.join(
          __dirname,
          `../images/puzzle/${_id}-${i}.` + ext
        );
        files[i] = `${_id}-${i}.` + ext;
        fs.writeFileSync(filePath, buffer);
      }

      Puzzle.updateOne({ _id }, { $set: { puzzleImages: files } })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("helo");
          console.log(e);
        });
    }
  );
};

const sendChanllenge = async (req, res) => {
  try {
    const time = Number(req.body.allocatedTime);

    const puzzle = new Puzzle({
      send: ObjectId(req.user.id),
      to: ObjectId(req.body.to),
      masterImage: req.file.filename,
      allocatedTime: time,
    });

    // const result = await Puzzle.insertMany([puzzle]);

    // // console.log(result);
    // createSlices(req.file.filename, result._id);

    // return res.json({ status: true, message: "Puzzle Created Successfully" });

    puzzle.save((err, result) => {
      if (err) {
        console.log(err.toString());
        return res.json({ err });
      }

      createSlices(req.file.filename, result._id);

      return res.json({ status: true, message: "Puzzle Created Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};

const getChanllenges = async (req, res) => {
  console.log(req.user);
  const challenges = await Puzzle.aggregate([
    {
      $match: {
        to: ObjectId(req.user.id),
        status: "PENDING",
      },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "UserID",
        localField: "send",
        as: "challenger",
      },
    },
    { $unwind: "$challenger" },
    {
      $lookup: {
        from: "users",
        foreignField: "_id",
        localField: "send",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $set: {
        "challenger.profileImage": {
          $concat: [basicPath, "/profile/", "$challenger.profileImage"],
        },
      },
    },
    {
      $set: {
        "challenger.name": {
          $concat: ["$user.firstName", " ", "$user.lastName"],
        },
      },
    },
    {
      $project: {
        _id: 1,
        name: "$challenger.name",
        nickName: "$challenger.username",
        profileImage: "$challenger.profileImage",
        UserID: "$challenger.UserID",
        color: "#fff",
        // challenger: 1,
        // allocatedTime: 1,
      },
    },
  ]);

  return res.json({ challenges });
};

const getPuzzle = async (req, res) => {
  const { _id } = req.params;

  const puzzle = await Puzzle.aggregate([
    {
      $match: {
        _id: ObjectId(_id),
      },
    },
    {
      $set: {
        puzzleImages: {
          $map: {
            input: "$puzzleImages",
            as: "p",
            in: { $concat: [basicPath, "/puzzle/", "$$p"] },
          },
        },
      },
    },
  ]);

  // puzzle[0].puzzleImages = shuffleImages(puzzle[0].puzzleImages);

  return res.json({ puzzle: puzzle[0] });
};

const submitPuzzle = async (req, res) => {
  let { _id, puzzleImages, timeTaken } = req.body;

  if (
    puzzleImages.length < 9 ||
    puzzleImages.includes("") ||
    puzzleImages.includes(null)
  ) {
    return res.json({ status: false, message: "Not Valid Image" });
  }

  const puzzle = await Puzzle.findOne({ _id }).lean();

  var valid = true;
  for (let index = 0; index < puzzleImages.length; index++) {
    if (puzzleImages[index] !== puzzle.puzzleImages[index]) {
      valid = false;
      break;
    }
  }

  console.log(valid);
  if (!valid) {
    console.log(timeTaken);
    if (timeTaken <= puzzle.allocatedTime * 60 * 1000) {
      return res.json({
        status: false,
        message: "Not Valid Image. please try again",
      });
    }
    console.log();
  }

  let query = {
    _id: _id,
  };

  const result = await Puzzle.updateOne(query, {
    $set: {
      status: valid === true ? "COMPLETED" : "FAILED",
      takenTime: timeTaken,
    },
  });

  console.log(result);

  return res.json({ status: true, message: "Puzzle completed" });
};

const getHistory = async (req, res) => {
  const challenges = await Puzzle.aggregate([
    {
      $match: {
        to: ObjectId(req.user.id),
        status: { $ne: "PENDING" },
      },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "UserID",
        localField: "send",
        as: "challenger",
      },
    },
    { $unwind: "$challenger" },
    {
      $set: {
        "challenger.profileImage": {
          $concat: [basicPath, "/profile/", "$challenger.profileImage"],
        },
      },
    },
    {
      $project: {
        _id: 1,
        challenger: 1,
        allocatedTime: 1,
        takenTime: 1,
        status: 1,
      },
    },
  ]);

  return res.json({ challenges });
};

const getUsers = async (req, res) => {
  const users = await Profile.find({ UserID: { $ne: ObjectId(req.user.id) } })
    .populate({
      path: "UserID",
      select: "firstName lastName",
    })
    .lean();

  return res.send({ users });
};

module.exports = {
  getPuzzleImg,
  sendChanllenge,
  getChanllenges,
  getPuzzle,
  submitPuzzle,
  getHistory,
  getUsers,
};
