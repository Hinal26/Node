const Joi = require("joi");

/** create travel */
const createTravle = {
    body: Joi.object().keys({
        Place: Joi.string().required().trim(),
        Members: Joi.number().integer().required(),
        Fees: Joi.number().integer().required(),
    }),
};

/** Get travel list */
const getTravelList = {
    query: Joi.object().keys(),
};

/** Get travel details by Id */
const getTravelDetails = {
    params: Joi.object().keys(),
};

/** Update travel details by Id */
const updateTravelDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        Place: Joi.string().required().trim(),
        Members: Joi.number().integer().required(),
        Fees: Joi.number().integer().required(),
    }),
};

module.exports = {
    createTravle,
    getTravelList,
    getTravelDetails,
    updateTravelDetails
}