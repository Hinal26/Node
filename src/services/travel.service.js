const { Travel } = require("../models");

/** Create travel */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
}

/** Get travel list */
const getTravelList = async () => {
    return Travel.find({ $or: [{ is_active: true }] });
};

/** Get travel by Id */
const getTravelById = async (travelId) => {
    return Travel.findById(travelId);
};

/** Update travel by Id */
const updateTravelDetails = async (travelId, update) => {
    return Travel.findByIdAndUpdate(travelId, { $set: update });
};

/** Delete travel */
const deleteTravel = async (travelId) => {
    return Travel.findByIdAndDelete(travelId);
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelById,
    updateTravelDetails,
    deleteTravel
};
