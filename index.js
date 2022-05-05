const express = require('express');

const server = express();

server.use(express.json());

const PORT = 1550;

server.get('/', (req, res) => {
    res.json({ endpoint: " First endpoint for testing."})
});

server.get('/nodemon', (req, res) => {
    res.json({ nodemon: " Nodemon endpoint for testing nodeman tool."})
});

server.listen(1550, () => {
    console.log(`Server running at port: ${PORT}`);
})