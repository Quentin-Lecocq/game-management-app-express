const db = require("../db/queries");
const mutations = require("../db/mutations");

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", { categories });
}

async function createCategoryGet(req, res) {
  res.render("createCategory", {
    title: "Create new category",
  })
}

async function createCategoryPost(req, res) {
  try {
    const { name } = req.body;
    await mutations.insertCategory(name);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: "failed to create category" })
  } finally {
    res.redirect("/categories");
  }
}

module.exports = {
  getCategories,
  createCategoryPost,
  createCategoryGet
};

