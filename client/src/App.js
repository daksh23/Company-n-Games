import React, { useEffect } from 'react';
import ImageToSlices from 'image-to-slices';

function App() {

//  var imageToSlices = require('image-to-slices');

    var lineXArray = [100, 200];
    var lineYArray = [100, 200];

    var imagePath = '/logo512.png';

    useEffect(() => {
      ImageToSlices(imagePath, [100, 300], [100, 200, 300], {
        saveToDir:"/Images"
      }, function(dataUrlList) {
        console.log('sliced!', dataUrlList);
      });
      
    })
    
  return (
    <div>

    </div>
  );
}

export default App;
