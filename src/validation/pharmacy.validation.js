const Joi = require("joi");

/** create pharmacy */
const createPharmacy = {
    body: Joi.object().keys({
        vitamins_medications: Joi.string().required().trim(),
        packets: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

/** Get pharmacy list */
const getPharmacyList = {
    query: Joi.object().keys(),
};

/** Get pharmacy details by Id */
const getPharmacyDetails = {
    params: Joi.object().keys(),
};

/** Update pharmacy details by Id */
const updatePharmacyDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        vitamins_medications: Joi.string().required().trim(),
        packets: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyDetails,
    updatePharmacyDetails
}