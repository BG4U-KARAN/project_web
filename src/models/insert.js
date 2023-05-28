const {model, Schema, default: mongoose} = require("mongoose");

const inputSchema = new Schema({
    name: String,
    Enrollment: Number,
    Password: String,
    Branch:String,
    Sem:String,
});
let iSchema = model("user", inputSchema)
iSchema.createIndexes();
module.exports = iSchema;
