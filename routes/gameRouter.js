const { Router } = require("express");
const { getGames, createGame } = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", getGames);
gameRouter.post("/new", createGame);

module.exports = gameRouter;
