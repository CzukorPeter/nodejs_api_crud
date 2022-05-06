const server = require('./api/server');

const PORT = 1550;

server.listen(1550, () => {
    console.log(`Server running at port: ${PORT}`);
})