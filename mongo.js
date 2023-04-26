// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const http = require('http');

// // // require('./register.html');
// // mongoose.connect('mongodb+srv://web:web-hosting@cluster0.be5n6jx.mongodb.net/test',{
// //     useNewUrlParser:true,
// //     keepAlive:true,
// //     useUnifiedTopology:true,
// // });


// // let db = mongoose.connection;
// // db.on('error', console.log.bind(console,'connection err'));
// // db.once('open', function(callback) {

// //     console.log("connected");
// // })

// // http.createServer()
// // const app = express();



// // app.use(bodyParser.json());
// // app.use(express.static('public'));
// // app.use(bodyParser.urlencoded({extended:true}));

// // app.post('/register', function(req, res) {
// //     res.sendFile(__dirname + "/register.php")
// //     let Name = req.body.name;
// //     let enroll = req.body.enrollment;
// //     let pass = req.body.password;
// //     let branch = req.body.branch;
// //     let sem = req.body.sem;

// //     const data = {
// //         "name": Name,
// //         "Enrollment": enroll,
// //         "Password": pass,
// //         "Branch": branch,
// //         "Sem": sem,
// //     }
// //       db.db('student').collection('student-data').insertOne(data, function(err, collection) {
// //         if(err) throw err;
// //         console.log('record inserted');
// //     });
// //     return res.redirect('login.php');
// // })

// // app.post("/",function(req, res) {
// //     res.set({'Access-control-Allow-Origin': '*'});
// //     return res.redirect('./register.html');
// // }).listen(3000)

// // console.log('server is run on 3000');

const http = require('http');
const fs = require('fs');

// http.createServer(function (req, res) {
//     // const {method, url} = req;
//     // const surl = new URL(url, 'url the server is running on');
//     // if(method == 'GET' && surl.pathname == '/register.html') {
//     fs.readFile('register.html', (err, data) => {
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         res.write(data);
//         return res.end();

//         fs.readFile('register.css', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/css' });
//             res.write(data);
//             return res.end();
//         })
//     });
//     // }
//     // if(method == 'GET' && surl.pathname == '/register.css') {

//     // }
// }).listen(3000);


const server = http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('register.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('File not found!');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
        }
        res.end();
      });
    } else if (req.url === '/register.css') {
      fs.readFile('register.css', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('File not found!');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.write(data);
        }
        res.end();
      });
    }
  }).listen(3000);
