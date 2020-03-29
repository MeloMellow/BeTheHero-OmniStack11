const knex = require('knex');
const config = require('../../knexfile');

const configAux = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connnection = knex(configAux);

module.exports = connnection;