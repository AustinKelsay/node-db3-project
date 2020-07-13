const knex = require("knex");

const knexfile = require("../knexfile");

const database = prcoess.env.DB_ENV || "development";

module.exports = knex(knexfile[database]);