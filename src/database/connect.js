const mongoose = require("mongoose");

const mongo = "paste your_mongodb_url";
require("colors");


const connectDB = async () => {
    await mongoose.connect(mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("[MONGODB]".yellow, "DATABASE CONNECTED");
}

module.exports = connectDB;
