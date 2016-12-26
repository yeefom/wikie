const pg = require('pg');
const config = {
  database : 'wikie',
  user : '',
  password: '',
  host : '',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

module.exports = pool;
