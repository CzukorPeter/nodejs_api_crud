const express = require('express');

const settlementsRouter = require('../Routes/settlements-routes');
const partnersRouter = require('../Routes/partners-routes');

const server = express();

server.use(express.json());

server.use('/api/settlements', settlementsRouter)
server.use('/api/partners', partnersRouter)

module.exports = server;