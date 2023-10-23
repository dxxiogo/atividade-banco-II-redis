const server = require('./server/Server');
const express = require('express');
const router = require('./server/routes');
const {tryConnectionDatabase} = require("./server/database/SequilizeConnection.js");

require('dotenv').config();


server.listen(process.env.API_PORT);

server.use(express.json());

server.use('/users', router);

tryConnectionDatabase();