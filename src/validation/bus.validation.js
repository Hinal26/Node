const Joi = require("joi");

/** create bus */
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        members: Joi.number().integer().required(),
        sheets: Joi.number().integer().required(),
    }),
};
const getBusList = {
    query : Joi.object().keys({
        bus_name: Joi.string().allow("").trim(),
        members: Joi.number().integer(),
        sheets: Joi.number().integer()
    }),
};

// /** Get bus list */
// const getBusList = {
//     query: Joi.object().keys(),
// };

// /** Get bus details by Id */
// const getBusDetails = {
//     params: Joi.object().keys(),
// };

// /** Update bus details by Id */
// const updateBusDetails = {
//     params: Joi.object().keys(),
//     body: Joi.object().keys({
//         bus_name: Joi.string().required().trim(),
//         members: Joi.number().integer().required(),
//         sheets: Joi.number().integer().required(),
//     }),
// };

module.exports = {
    createBus,
    getBusList
}