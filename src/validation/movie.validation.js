const Joi = require("joi");

/** create movie */
const createMovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        tickets: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

/** Get movie list */
const getMovieList = {
    query: Joi.object().keys(),
};

/** Get movie details by Id */
const getMovieDetails = {
    params: Joi.object().keys(),
};

/** Update movie details by Id */
const updateMovieDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        tickets: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieDetails,
    updateMovieDetails
}