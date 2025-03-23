const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
};

async function getAllGamesWithCategories() {
  const { rows } = await pool.query(
    "SELECT g.id, g.title, g.platform, g.stock_quantity, c.name AS category_name FROM games g JOIN game_categories gc ON g.id = gc.game_id JOIN categories c ON c.id = gc.category_id"
  );
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

module.exports = {
  getAllGames,
  getAllGamesWithCategories,
  getAllCategories
}
