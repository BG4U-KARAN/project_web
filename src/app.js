const express = require("express");
const bodyParser = require("body-parser");
require("colors");
const connectDB = require("./database/connect");
const insertDB = require("./database/insertDB");
const fetchDB = require("./database/fetch");


const start = async () => {
    try {
        await connectDB();
        await insertDB();
        // await fetchDB();
    } catch (error) {
        console.log(error);
    }
};
start();


