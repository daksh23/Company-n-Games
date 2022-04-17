require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const { databaseConnection } = require('./config/db');
const path = require('path')

// socket connection
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

const apiroutes = require("./Routes");
const mongoURL = process.env.MONGO_DB

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + "/images"));
// console.log(path.join(__dirname, "images"));
app.use("/profile", express.static(path.join(__dirname, "images/profiles")));
app.use("/puzzle", express.static(path.join(__dirname, "images/puzzle")));
 

// get routes
app.use("/api", apiroutes);

// looking for socket connecption
io.on('connection', (socket) => { console.log('New Socket Connection...!') });

// Database Connection
databaseConnection(mongoURL);

// regular server
server.listen(process.env.PORT, function () {
  console.log("Web server listening on port:" + process.env.PORT)
})