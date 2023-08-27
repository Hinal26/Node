const Joi = require("joi");

/** create stationary */
const createStationary = {
    body: Joi.object().keys({
        stationary_name: Joi.string().required().trim(),
        products: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

/** Get stationary list */
const getStationaryList = {
    query: Joi.object().keys(),
};

/** Get stationary details by Id */
const getStationaryDetails = {
    params: Joi.object().keys(),
};

/** Update stationary details by Id */
const updateStationaryDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        stationary_name: Joi.string().required().trim(),
        products: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryDetails,
    updateStationaryDetails
}