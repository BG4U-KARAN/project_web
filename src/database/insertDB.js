const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("colors");
const mongoose = require("mongoose");
const iSchema = require("../models/insert");

app.use(bodyParser.json());
app.use(express.static("public/template"));
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test";
const port = 8000;
const db = mongoose.connection;

const insertDB = () => {
    app.post("/signup", async (req, res) => {
        let name = req.body.name;
        let enroll = req.body.enrollment;
        let pass = req.body.password;
        let branch = req.body.branch;
        let sem = req.body.sem;

        let data = new iSchema({
            "name": name,
            "Enrollment": enroll,
            "Password": pass,
            "Branch": branch,
            "Sem": sem
        })

        data.save();
        console.log("data success instered");
        return res.redirect("login.html");
    });
    
    app.post("/login", (req, res) => {

        // let db = iSchema.db("test");
        // let r = iSchema.collection("inputSchema");
        let s =  iSchema.findOne({
            "Enrollment": req.body.enrollment,
            "Password": req.body.password,
           
        });
        s.then((data) => {
            if(data) {
                console.log(data.name.green.bold);
            }
            else {
                console.log("error");
            };

        });

        // console.log(s);
        return res.redirect("home.html");
    });
};



app.get("/", (req, res) => {
    res.set({
        "ALLOW-access-ALLOW-Origin": "*"
    })
    return res.redirect('register.html');
});

app.listen(port, () => {
    console.log(`[SERVER]`.yellow, `server running on ${port}`);
});




// const fetchDB = (req, res) => {
//     app.post("/login", (req, res) => {
//         iSchema.findOne({ Enrollment: req.body.enrollment }, (err, data) => {
//             if (data) {
//                 if (data.password == req.body.password) {
//                     res.send("success");
//                 }
//             } else {
//                 res.send("error");
//             }
//         })
//         return res.redirect("home.html")
//     });

// }
module.exports = insertDB;
// module.exports = fetchDB;