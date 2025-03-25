const { Router } = require("express");
const {
  getGames,
  createGameGet,
  createGamePost,
  deleteGame
} = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", getGames);
gameRouter.get("/create", createGameGet);
gameRouter.post("/create", createGamePost);
gameRouter.post("/:id/delete", deleteGame);

module.exports = gameRouter;
