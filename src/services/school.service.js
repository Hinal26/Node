const { School } = require("../models");

/** Create school */
const createSchool = async (reqBody) => {
    return School.create(reqBody);
}

/** Get school list */
const getSchoolList = async () => {
    return School.find({ $or: [{ is_active: false }] });
};

/** Get school by Id */
const getSchoolById = async (schoolId) => {
    return School.findById(schoolId);
};

/** Update school by Id */
const updateSchoolDetails = async (schoolId, update) => {
    return School.findByIdAndUpdate(schoolId, { $set: update });
};

/** Delete School */
const deleteSchool = async (schoolId) => {
    return School.findByIdAndDelete(schoolId);
};

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolById,
    updateSchoolDetails,
    deleteSchool
};
