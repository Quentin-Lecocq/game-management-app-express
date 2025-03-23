const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render('index', {
    message: 'Hello from ejs'
  })
})

module.exports = indexRouter;
