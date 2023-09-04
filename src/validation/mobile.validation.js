const Joi = require("joi");

/** create mobile */
const createMobile = {
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        peace: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

/** Get mobile list */
const getMobileList = {
    query: Joi.object().keys(),
};

/** Get mobile details by Id */
const getMobileDetails = {
    params: Joi.object().keys(),
};

/** Update mobile details by Id */
const updateMobileDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        peace: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createMobile,
    getMobileList,
    getMobileDetails,
    updateMobileDetails
}