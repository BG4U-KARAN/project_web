const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongo = "mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.static('public/template'));
app.use(bodyParser.urlencoded({
    extended: true,
}))


mongoose.connect(mongo);
let db = mongoose.connection;

db.on("error", () => console.log("DB Error"));
db.once("open", ()=> console.log("Database connected"));

app.post("/signup", (req, res) => {
    let name = req.body.name;
    let enroll = req.body.enrollment;
    let pass = req.body.password;
    let branch = req.body.branch;
    let sem = req.body.sem;

    let data = {
        "name": name,
        "Enrollment": enroll,
        "Password": pass,
        "Branch": branch,
        "Sem": sem
    }

    db.collection('users').insertOne(data,(err, coll) => {
        if(err) throw err;
        console.log("record inserted");
    })
     return res.redirect('login.html');
});
// const mongoURI = "mongodb://localhost:27017/admin";
app.get("/", (req, res) => {
    res.set({
        "ALLOW-access-ALLOW-Origin": "*"
    })
    return res.redirect('register.html');
});


// app.set(bodyParser.json());
// app.set(bodyParser.urlencoded({extended: false}));
// app.set(express.static('public'));

app.listen(port, () => {
    console.log(`server running on ${port}`);
})