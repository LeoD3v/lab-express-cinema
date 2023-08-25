const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      console.log("Retrieved books from DB:", allMoviesFromDB);

      res.render("movies", { movies: allMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      next(error);
    });
});

router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then((movie) => {
      res.render(`movie`, movie);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
