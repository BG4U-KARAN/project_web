const express = require("express");
const bodyParser = require("body-parser");
require("colors");
const connectDB = require("./database/connect");
const insertDB = require("./database/insertDB");
// const forgetPass = require("./database/forget");

const start = async () => {
    try {
        await connectDB();
        await insertDB();
    } catch (error) {
        console.log(error);
    }
};
start();


