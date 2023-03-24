const { Schema, model } = require("mongoose");

let levelSchema = new Schema({
    Guild: String,
    User: String,
    XP: Number,
    Level: Number
})

module.exports = model("level", levelSchema);


//https://www.bleepstatic.com/content/hl-images/2020/08/28/red-dawn.jpg
