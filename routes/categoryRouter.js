const { Router } = require("express");
const { getCategories } = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", getCategories);

module.exports = categoryRouter;
