const db = require("../db/queries");
const mutations = require("../db/mutations");


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
    categories
  })
}



module.exports = {
  getGames,
  createGet,
  createPost
}
