const { body, validationResult } = require("express-validator");
const { Router } = require("express");
const {
  getGames,
  createGameGet,
  createGamePost,
  deleteGame
} = require("../controllers/games");

const router = Router();

router.get("/", getGames);
router.get("/create", createGameGet);
router.post(
  '/create',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('platform').isIn(['Xbox', 'PS5', 'PS4', 'PC']).withMessage('Invalid platform'),
    body('stock_quantity').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer')
  ],
  createGamePost
);
router.post("/:id/delete", deleteGame);

module.exports = router;
