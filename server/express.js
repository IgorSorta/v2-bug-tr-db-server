//TODO server func.
const express = require('express');
const server = express();

const user = require('./routes/user');
const main = require('./routes/main');

class Server {
    routes() {
        server.use('/', main);
        server.use('/user', user);
    }
    listener() {
        server.listen(3000, () => console.log('DB server is running!'))
    }
}

module.exports = new Server();