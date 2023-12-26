const knex = require("knex");
const knexFile = require("../knexfile");

const db = knex(knexFile.development);
const dockerDB = knex(knexFile.docker);

module.exports = db;
module.exports = dockerDB;

