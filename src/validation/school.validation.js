const Joi = require("joi");

/** create school */
const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        student: Joi.number().integer().required(),
        teacher: Joi.number().integer().required(),
    }),
};

/** Get school list */
const getSchoolList = {
    query: Joi.object().keys(),
};

/** Get school details by Id */
const getSchoolDetails = {
    params: Joi.object().keys(),
};

/** Update school details by Id */
const updateSchoolDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        student: Joi.number().integer().required(),
        teacher: Joi.number().integer().required(),
    }),
};

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolDetails,
    updateSchoolDetails
}