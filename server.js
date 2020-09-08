require('dotenv').config();

const express = require('express');
const server = express();
const morgan = require('morgan');

const {
    checkStatus,
    catchServerErrors
} = require('./server/middleware/server_middleware');

const user = require('./server/routes/user');
const message = require('./server/routes/message');
const bug = require('./server/routes/bug');

// Middleware
server.use(express.json());
server.use(morgan(':remote-addr :method :url :status :res[content-length] - :response-time ms'));
server.use('/status', checkStatus);

// Routes
server.use('/user', user);
server.use('/message', message);
server.use('/bug', bug);

// Error handler
server.use(catchServerErrors);

// Server
const dbApp = server.listen(process.env.PORT, () => console.log(`DB server is running! (port: ${dbApp.address().port})`));

module.exports = dbApp;