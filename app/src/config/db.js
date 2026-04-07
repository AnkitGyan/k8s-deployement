const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  port: 5432,
});

module.exports = pool;