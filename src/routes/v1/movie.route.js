const express = require("express");
const { movieValidation } = require("../../validation");
const { movieController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create movie */
router.post(
    "/create-movie",
    validate(movieValidation.createMovie),
    movieController.createMovie
);

/** Get movie list */
router.get(
    "/movie-list",
    validate(movieValidation.getMovieList),
    movieController.getMovieList
);

/** Get movie details by id */
router.get(
    "/get-movie-details/:movieId",
    validate(movieValidation.getMovieDetails),
    movieController.getMovieDetails
);

/** movie details update by id */
router.put(
    "/update-movie-details/:movieId",
    validate(movieValidation.updateMovieDetails),
    movieController.updateMovieDetails
);

/** Delete movie */
router.delete(
    "/delete-movie/:movieId",
    validate(movieValidation.getMovieDetails),
    movieController.deleteMovie
);

module.exports = router;
