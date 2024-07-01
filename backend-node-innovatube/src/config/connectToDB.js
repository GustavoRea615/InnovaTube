const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URL;

async function connectToDB() {
    await mongoose.connect(uri).then(()=>{
        console.log("DB is connected");
    }).catch((error)=>{
        console.log("DB is not connected", error.message);
    })
};

module.exports = connectToDB;
