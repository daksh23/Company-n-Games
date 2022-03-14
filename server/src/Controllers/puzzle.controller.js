var imageToSlices = require("image-to-slices");
var fs = require("fs");
const path = require("path");
const Puzzle = require("../Models/puzzle.model");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const profilePath = "http://localhost:3030";

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

      Puzzle.updateOne({ _id }, { $set: { puzzleImages: files } }).then(
        (res) => {
          console```````.log(res);```````
        }
      );
    }
  );
};

const sendChanllenge = async (req, res) => {
  try {

    const time = Number(req.body.allocatedTime);

    const puzzle = new Puzzle({
      send: req.body.send,
      to: req.body.toUser,
      masterImage: req.file.filename,
      allocatedTime: time,
    });

    puzzle.save((err, result) => {
      if (err) {
        return res.json({ err });
      }
      console.log()
      createSlices(req.file.filename, result._id);

      return res.json({ status: true, message: "Puzzle Created Successfully" });
    });
  } catch (error) {}
};

const getChanllenges = async (req, res) => {
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
      $set: {
        "challenger.profileImage": {
          $concat: [profilePath, "/profile/", "$challenger.profileImage"],
        },
      },
    },
    {
      $project: {
        _id: 1,
        challenger: 1,
        allocatedTime: 1,
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
            in: { $concat: [profilePath, "/puzzle/", "$$p"] },
          },
        },
      },
    },
  ]);

  puzzle[0].puzzleImages = shuffleImages(puzzle[0].puzzleImages);

  return res.json({ puzzle: puzzle[0] });
};

const submitPuzzle = async (req, res) => {
  let { _id, puzzleImages, takenTime } = req.body;

  if (
    puzzleImages.length < 9 ||
    puzzleImages.includes("") ||
    puzzleImages.includes(null)
  ) {
    return res.json({ message: "Not Valid Image" });
  }

  let query = {
    _id: _id,
  };

  for (let index = 0; index < puzzleImages.length; index++) {
    query[`puzzleImages.${index}`] = puzzleImages[index];
  }

  // console.log(query);

  const result = await Puzzle.updateOne(query, {
    $set: { status: "COMPLETED", takenTime: takenTime },
  });

  // console.log(result);

  return res.json({ result });
};

const getHistory = async (req, res) => {
  const challenges = await Puzzle.aggregate([
    {
      $match: {
        to: ObjectId(req.user.id),
        status: "COMPLETED",
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
          $concat: [profilePath, "/profile/", "$challenger.profileImage"],
        },
      },
    },
    {
      $project: {
        _id: 1,
        challenger: 1,
        allocatedTime: 1,
        takenTime: 1,
      },
    },
  ]);

  return res.json({ challenges });
};

module.exports = {
  getPuzzleImg,
  sendChanllenge,
  getChanllenges,
  getPuzzle,
  submitPuzzle,
  getHistory,
};
