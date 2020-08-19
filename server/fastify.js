const fastify = require('fastify')({
    logger: true
});

const DB = require('../database/index');

const fastifyServer = {
    serverRoutes() {
        const {
            name
        } = require('./routes');

        // Declare a routes
        fastify.get('/user/:name', name,
            async function(request, reply) {
                const par = request.params;
                const result = await DB.findUser('users', par.name)
                console.log('res: ', result)
                reply.send(result);
            });
        fastify.get('/x', (request, reply) => {
            console.log('xxx')
            reply.send('xxx')
        });
        fastify.get('/y', (request, reply) => {
            console.log('YYY')
            reply.send('YYY')
        });
    },
    serverListen() {
        // Run the server!
        fastify.listen(3000, function(err, address) {
            if (err) {
                fastify.log.error(err);
                process.exit(1);
            }
            fastify.log.info(`server listening on ${address}`);
        });
    },
};

module.exports = fastifyServer;