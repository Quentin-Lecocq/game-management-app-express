const { Router } = require("express");
const { getGames, createGet, createPost, } = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", getGames);
gameRouter.get("/create", createGet)
gameRouter.post("/create", createPost);

module.exports = gameRouter;
