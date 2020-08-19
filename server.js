// Require the framework and instantiate it
const fastifyServer = require('./server/fastify');

// 
fastifyServer.serverRoutes();


// Run the server!
fastifyServer.serverListen();