var imageToSlices = require('image-to-slices');
var fs = require('fs');

// data url regx
var regex = /^data:.+\/(.+);base64,(.*)$/;

const getPuzzleImg = (req, res) => {
    
    imageToSlices.configure({
        clipperOptions: {
            canvas: require('canvas')
        }
    });
    
    var lineXArray = [100, 200];
    var lineYArray = [100, 200];
    var source = 'http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg';
     
    imageToSlices(source, lineXArray, lineYArray, {
       // saveToDir: 'imagesHere/'
       saveToDataUrl:true
    
    }, function(dataUrlList) {
    
        console.log(dataUrlList.length);    
        var i = 0;
        console.log('enter in loop');
        for(i; i < dataUrlList.length; i++){
    
            var matches = dataUrlList[i].dataURI.match(regex);
            var ext = matches[1];
            var data = matches[2];
            var buffer = Buffer.from(data, 'base64');
            
            //store buffer-images into specific folder
            fs.writeFileSync(`./images/data-${i}.` + ext, buffer);
        }
        console.log('exit loop');
    });

    return(
        console.log('puzzle img')
    )
};

module.exports ={
    getPuzzleImg
}