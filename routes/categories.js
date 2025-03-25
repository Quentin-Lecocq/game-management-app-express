const { Router } = require("express");
const {
  getCategories,
  createCategoryGet,
  createCategoryPost
} = require("../controllers/categoryController");

const router = Router();

router.get("/", getCategories);
router.get("/create", createCategoryGet);
router.post("/create", createCategoryPost);

module.exports = router;
