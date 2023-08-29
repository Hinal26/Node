const Joi = require("joi");

/** create user */
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim()
    }),
};

/** Get user list */
const getUserList = {
    query: Joi.object().keys(),
};

/** Get user details by Id */
const getUserDetails = {
    params: Joi.object().keys(),
};

/** Update user details by Id */
const updateUserDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim()
    }),
};

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUserDetails
}