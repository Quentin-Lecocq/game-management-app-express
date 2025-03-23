const { Router } = require("express");
const {
  getGames,
  createGet,
  createPost,
  deleteGame
} = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", getGames);
gameRouter.get("/create", createGet);
gameRouter.post("/create", createPost);
gameRouter.post("/:id/delete", deleteGame);

module.exports = gameRouter;
