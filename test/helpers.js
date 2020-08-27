const axios = require('axios');
const mysql2 = require('mysql2');

// create the connection to database
const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'igortestDB',
    database: 'test_tracker'
});

module.exports = {
    testRequest(params) {
        return new Promise(resolve => {
            axios.get(params)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    console.log('Test request function: ', error);
                });
        });
    },
    testDbQuery(query) {
        return new Promise(resolve => {
            connection.query(
                query,
                function(err, results, ) {
                    resolve(results);
                }
            );
            connection.end(function(err) {
                console.log(err);
            });

        })
    }
};