// Update with your config settings.
// Knex configuration
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'igortestDB',
            database: 'test_tracker'
        },
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds',
        },
    },
    production: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'igortestDB',
            database: 'bug_tracker'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
};