const db = require("../db/queries");
const mutations = require("../db/mutations");

const platformData = [
  { id: '1', name: 'Xbox' },
  { id: '2', name: 'PS5' },
  { id: '3', name: 'PS4' },
  { id: '4', name: 'PC' }
]


async function getGames(req, res) {
  const games = await db.getAllGames();
  res.render("games", {
    games,
  });
}

async function createPost(req, res) {
  try {
    const { title, platform, stock_quantity } = req.body;
    await mutations.insertGame(title, platform, stock_quantity);
    res.status(201)
  } catch (error) {
    console.error("Error creating game:", error);
    res.status(500).json({ error: "Failed to create game" });
  } finally {
    res.redirect("/games");
  }
}

async function createGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("createGame", {
    title: "Create new game",
    categories,
    platforms: platformData
  })
}

async function deleteGame(req, res) {
  try {
    const { id } = req.params;
    await mutations.deleteGame(id);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete game' });
  } finally {
    res.redirect("/games");
  }
}

module.exports = {
  getGames,
  createGet,
  createPost,
  deleteGame
}
