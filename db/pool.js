const { Pool } = require("pg");

module.exports = new Pool({
  host: 'localhost',
  user: 'quentinlecocq',
  database: 'game_management_db',
  password: 'kalkbrenner',
  port: 5432
})
