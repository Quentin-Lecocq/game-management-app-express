const express = require('express');
const app = express();
const port = 8000;

const gameRouter = require("./routes/games");
const indexRouter = require("./routes");
const categoryRouter = require("./routes/categories");

// Middleware pour parser le JSON
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Configure ejs engine templates
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/games", gameRouter);
app.use("/categories", categoryRouter);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
