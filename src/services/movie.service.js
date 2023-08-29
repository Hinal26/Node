const { Movie } = require("../models");

/** Create Movie */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
}

/** Get movie list */
const getMovieList = async () => {
    return Movie.find({ $or: [{ is_active: true }] });
};

/** Get movie by Id */
const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

/** Update movie by Id */
const updateMovieDetails = async (movieId, update) => {
    return Movie.findByIdAndUpdate(movieId, { $set: update });
};

/** Delete Movie */
const deleteMovie = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    updateMovieDetails,
    deleteMovie
};
