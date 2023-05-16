const {model, Schema, default: mongoose} = require("mongoose");

const inputSchema = new Schema({
    name: String,
    Enrollment: Number,
    Password: String,
    Branch:String,
    Sem:String,
});
let iSchema = model("inputSchema", inputSchema)

module.exports = iSchema;