const mongoose = require('mongoose');


async function connectToMongoDB(url){
    try{
        await mongoose.connect(url);
        return console.log('connected to database');
    }catch(err){
        console.log('Error', err);
    }
}

module.exports = {
    connectToMongoDB,
}
