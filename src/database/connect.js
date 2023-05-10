const mongoose = require("mongoose");

const mongo = "mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test";
require("colors");


const connectDB = async () => {
    await mongoose.connect(mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("[MONGODB]".yellow, "DATABASE CONNECTED");
}

module.exports = connectDB;