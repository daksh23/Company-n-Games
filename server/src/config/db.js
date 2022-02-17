const mongoose = require('mongoose');

const databaseConnection = (url, ) => {
    
    mongoose.connect(url).then(()=>{
    console.log("connected to DB");
})


}

module.exports = {
    databaseConnection
}