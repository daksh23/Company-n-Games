require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const { databaseConnection } = require('./config/db');

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

// get routes
app.use("/api", apiroutes);

// looking for socket connection
io.on('connection', (socket) => { console.log('New Socket Connection...!') });

// Database Connection
databaseConnection(mongoURL);

// regular server
server.listen(process.env.PORT, function () {
  console.log("Web server listening on port:" + process.env.PORT)
})