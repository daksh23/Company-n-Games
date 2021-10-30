var imageToSlices = require('image-to-slices');

var lineXArray = [100, 200];
var lineYArray = [100, 200];

var imagePath = 'http://www.sfu.ca/~swoloshe/Final%20Website/Website%20Imagery/dice.jpg';

imageToSlices(source, lineXArray, lineYArray, {
    saveToDir: '../../Images'
}, function() {
    return 'Image successfully divided';
});
