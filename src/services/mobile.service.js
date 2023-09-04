const { Mobile } = require("../models");

/** Create mobile */
const createMobile = async (reqBody) => {
    return Mobile.create(reqBody);
}

/** Get mobile list */
const getMobileList = async () => {
    return Mobile.find({ $or: [{ is_active: false }] });
};

/** Get mobile by Id */
const getMobileById = async (mobileID) => {
    return Mobile.findById(mobileID);
};

/** Update mobile by Id */
const updateMobileDetails = async (mobileID, update) => {
    return Mobile.findByIdAndUpdate(mobileID, { $set: update });
};

/** Delete mobile */
const deleteMobile = async (mobileID) => {
    return Mobile.findByIdAndDelete(mobileID);
};

module.exports = {
    createMobile,
    getMobileList,
    getMobileById,
    updateMobileDetails,
    deleteMobile
};
