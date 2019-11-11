const express = require("express");
const hbs = require("hbs");
const app = express();

const PORT = 3000;
const movies = require("./moviesData");

// SET THE TEMPLATING ENGINE
app.set("view engine", "hbs");

// SET THE DIRECTORY USED TO SERVE VIEWS
app.set("views", __dirname + "/views");

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// SET THE DIRECTORY USED TO SERVE PARTIALS
hbs.registerPartials(__dirname + "/views/partials");

//
//
// ROUTES
app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/movies", (req, res, next) => {
  const moviesSlice = movies.slice(0, 40);

  const data = {
    movies: moviesSlice
  };

  res.render("movies", data);
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on a PORT ${PORT}`));
