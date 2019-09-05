//Imports
const express = require('express')
var http = require('http');

const app = express()
var server = http.createServer(app);
const process = require('process')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Student = require('./models/Student')
const Teachers = require('./models/Teachers')
const Class = require('./models/Class')

const port = process.env.PORT || 5000

const cors = require('cors')
const client = require('socket.io').listen(server).sockets;
app.use(bodyParser.json())  //Body Parser MiddleWare
app.use(express.json())





// const url = 'mongodb://demo:demo123@ds133137.mlab.com:33137/puroartisan'
// const url2 = 'mongodb://demo:demo123@ds347467.mlab.com:47467/artisanpractice'

// mongoose.connect(url, { useNewUrlParser: true }) //MongoDB connection using Mongoose
// var db = mongoose.connection //Mongo Connection Instance
// db.on('open', () => console.log('database connected'))
app.use(cors())
// const admin = require("firebase-admin");
// const serviceAccount = require('./pureartisanapp-firebase-adminsdk.json');
app.use(bodyParser())
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://pureartisanapp.firebaseio.com"
// });

mongoose.connect('mongodb://admin:admin123@ds149344.mlab.com:49344/demo' , { useNewUrlParser: true }) //MongoDB connection using Mongoose
var db = mongoose.connection //Mongo Connection Instance
db.on('open', () => console.log('database connected'))

app.get("/",(req,res)=>{
    res.send({
        message: "Welcome"
    })
})
app.post("/api/addStudent",(req,res)=>{
    Student.create(req.body,(err,doc)=>{
        if(err)throw err
        res.json({
            message:"Success",
            data:doc
        })
    })
})
app.post("/api/addTeacher",(req,res)=>{
    Teachers.create(req.body,(err,doc)=>{
        if(err)throw err
        res.json({
            message:"Success",
            data:doc
        })
    })
})
app.post("/api/addClass",(req,res)=>{
    Class.create(req.body,(err,doc)=>{
        if(err)throw err
        res.json({
            message:"Success",
            data:doc
        })
    })
})
app.post("/api/addTeacher",(req,res)=>{
    Teachers.create(req.body,(err,doc)=>{
        if(err)throw err
        res.json({
            message:"Success",
            data:doc
        })
    })
})



//Server
app.listen(port, function () {
    console.log('Listening on port' + port)
})


