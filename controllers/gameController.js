const db = require("../db/queries");
const mutations = require("../db/mutations");


async function getGames(req, res) {
  const games = await db.getAllGamesWithCategories();
  res.render("games", { games });
}

async function createGame(req, res) {
  try {
    const { title, platform, stock_quantity } = req.body;
    const newGame = await mutations.insertGame(title, platform, stock_quantity);
    res.status(201).json(newGame);
  } catch (error) {
    console.error("Error creating game:", error);
    res.status(500).json({ error: "Failed to create game" });
  }
}



module.exports = {
  getGames,
  createGame
}
