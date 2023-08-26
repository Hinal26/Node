const { movieService } = require("../services");

/** create movie */
const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movie = await movieService.createMovie(reqBody);

        res.status(200).json({
            success: true,
            message: "Movie create successfully!",
            data: { movie },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get movie list */
const getMovieList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getMovie = await movieService.getMovieList(reqBody);
        if (!getMovie) {
            throw new Error("Movie list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get movie list successfully!",
            data: getMovie,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get movie details by id */
const getMovieDetails = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const getDetails = await movieService.getMovieById(movieId);
        if (!getDetails) {
            throw new Error("Movie details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Movie details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** movie details update by id */
const updateMovieDetails = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const getDetails = await movieService.getMovieById(movieId);
        if (!getDetails) {
            throw new Error("Movie not found!");
        }

        await movieService.updateMovieDetails(movieId, req.body);

        res.status(200).json({ success: true, message: "Movie details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete movie */
const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const getDetails = await schoolService.getSchoolById(movieId);
        if (!getDetails) {
            throw new Error("Movie not found!");
        }

        await movieService.deleteMovie(movieId);

        res.status(200).json({
            success: true,
            message: "Movie delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieDetails,
    updateMovieDetails,
    deleteMovie
};
