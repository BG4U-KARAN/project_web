const mongoose = require("mongoose");

const url = "mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test";
const connect = () => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connect;