const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("colors");

const iSchema = require("../models/insert");

app.use(bodyParser.json());
app.use(express.static("public/template"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;

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
        let s = iSchema.findOne({
            "Enrollment": req.body.enrollment,
            "Password": req.body.password,
        });
        s.then((data) => {
            if (data) {
                console.table({
                    "name": data.name,
                    "enrollment": data.Enrollment,
                    "password": data.Password,
                    "branch": data.Branch,
                    "sem": data.Sem,
                });
                return res.redirect("home.html");
            }
            else {
                console.log("user not found");
                return res.redirect("login.html");
            };
        });
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

module.exports = insertDB;
