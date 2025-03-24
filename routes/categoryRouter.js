const { Router } = require("express");
const {
  getCategories,
  createCategoryGet,
  createCategoryPost
} = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/create", createCategoryGet);
categoryRouter.post("/create", createCategoryPost);

module.exports = categoryRouter;
