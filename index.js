const express = require('express');
const app = express();
const port = 8000;

const gameRouter = require("./routes/gameRouter");
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");

// Middleware pour parser le JSON
app.use(express.json());

// Configure ejs engine templates
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/games", gameRouter);
app.use("/categories", categoryRouter);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
