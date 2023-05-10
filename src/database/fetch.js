// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const path = require("path");
// const iSchema = require("../models/insert");
// require("colors")

// const mongoose = require("mongoose");
// // const iSchema = require("../models/insert");
// app.set('template', path.join(__dirname, "public/template"))
// app.use(bodyParser.json());
// app.use(express.static("public/template"));
// app.use(bodyParser.urlencoded({ extended: true }));

// const url = "mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test";
// const db = mongoose.connection;

// const fetchDB = () => {


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
    //     let name = req.body.name;
    //     let enroll = req.body.enrollment;
    //     let pass = req.body.password;
    //     let branch = req.body.branch;
    //     let sem = req.body.sem;

    //     let data = new iSchema ({
    //         "name": name,
    //         "Enrollment": enroll,
    //         "Password": pass,
    //         "Branch": branch,
    //         "Sem": sem
    //     });
    //  let result =   iSchema.findOne({data});
    //  console.log(result);

    //  return res.redirect("home.html");
// }

//how to fetch data from mongodb in login form using node js?


// module.exports = fetchDB;