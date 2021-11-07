
var express = require('express')
var cors = require('cors')
var app = express()
var fs = require('fs');
const PORT = 1234

// data url regx
var regex = /^data:.+\/(.+);base64,(.*)$/;


app.use(cors())

var imageToSlices = require('image-to-slices');

imageToSlices.configure({
    clipperOptions: {
        canvas: require('canvas')
    }
});

var lineXArray = [100, 200, 300];
var lineYArray = [100, 200, 300];
var source = 'http://www.sfu.ca/~swoloshe/Final%20Website/Website%20Imagery/dice.jpg';
 
imageToSlices(source, lineXArray, lineYArray, {
   // saveToDir: 'imagesHere/'
   saveToDataUrl:true

}, function(dataUrlList) {

    console.log(dataUrlList.length);    
    var i = 0;
    for(i; i < dataUrlList.length; i++){

        var matches = dataUrlList[i].dataURI.match(regex);
        var ext = matches[1];
        var data = matches[2];
        var buffer = Buffer.from(data, 'base64');
        
        //store buffer-images into specific folder
        fs.writeFileSync(`./imagesHere/data-${i}.` + ext, buffer);
    }



});




app.listen(PORT, function () {
  console.log(`Web server listening on port ${PORT}`)
})