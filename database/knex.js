const knex = require('knex');

// Initiate and configure knex builder
const config = require('../knexfile');

module.exports = knex(config.development);