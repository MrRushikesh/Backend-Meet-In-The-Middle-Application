let mongoose = require('mongoose');


async function dbConnection(){
    try{

       await mongoose.connect('mongodb://127.0.0.1:27017/mitm');
       console.log("Database Connected Successfully...");

    }catch(error){

        console.log("Error While Connecting Database....",error);

    }
}

module.exports = dbConnection;