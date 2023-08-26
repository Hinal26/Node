const Joi = require("joi");

/** create hotel */
const creatHotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        table: Joi.number().integer().required(),
        waiter: Joi.number().integer().required(),
    }),
};

/** Get hotel list */
const getHotelList = {
    query: Joi.object().keys(),
};

/** Get hotel details by Id */
const getHotelDetails = {
    params: Joi.object().keys(),
};

/** Update hotel details by Id */
const updateHotelDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        table: Joi.number().integer().required(),
        waiter: Joi.number().integer().required(),
    }),
};

module.exports = {
    creatHotel,
    getHotelList,
    getHotelDetails,
    updateHotelDetails
}