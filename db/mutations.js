const pool = require("./pool");

async function insertGame(title, platform, stock_quantity) {
  const { rows } = await pool.query(
    "INSERT INTO games (title, platform, stock_quantity) VALUES ($1, $2, $3) RETURNING *",
    [title, platform, stock_quantity]
  );
  return rows[0];
}

module.exports = {
  insertGame
}
