const Joi = require("joi");

/** create jewellery */
const createJewellery = {
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        pieces: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

/** Get jewellery list */
const getJewelleryList = {
    query: Joi.object().keys(),
};

/** Get jewellery details by Id */
const getJewelleryDetails = {
    params: Joi.object().keys(),
};

/** Update jewellery details by Id */
const updateJewelleryDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        pieces: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    updateJewelleryDetails
}