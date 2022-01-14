import 'reflect-metadata';
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
const http = require('http');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

const PORT = 1234
const apiroutes = require("./Routes");

app.use(cors());

app.use("/api", apiroutes);

io.on('connection', (socket) => { console.log('New Socket Connection...!') });

server.listen(PORT, function () {
  console.log(`Web server listening on port ${PORT}`)
})