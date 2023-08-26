const Joi = require("joi");

/** create music */
const createMusic = {
    body: Joi.object().keys({
        music_name: Joi.string().required().trim(),
        singers: Joi.number().integer().required(),
        viewers: Joi.number().integer().required(),
    }),
};

/** Get school list */
const getMusicList = {
    query: Joi.object().keys(),
};

/** Get school details by Id */
const getMusicDetails = {
    params: Joi.object().keys(),
};

/** Update school details by Id */
const updateMusicDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        music_name: Joi.string().required().trim(),
        singers: Joi.number().integer().required(),
        viewers: Joi.number().integer().required(),
    }),
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicDetails,
    updateMusicDetails
}