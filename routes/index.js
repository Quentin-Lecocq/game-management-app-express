const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render('index', {
    message: 'Hello from ejs'
  })
})

module.exports = router;
