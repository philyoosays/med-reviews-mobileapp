require('dotenv').config()

const pgp = require('pg-promise')({
  query: q => console.log(q.query),
});

const config = {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'psych_meds_mobile',
}

const dbConfig = pgp(process.env.DATABASE_URL || config)

module.exports = dbConfig;
