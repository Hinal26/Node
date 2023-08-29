const { Stationary } = require("../models");

/** Create Stationary */
const createStationary = async (reqBody) => {
    return Stationary.create(reqBody);
}

/** Get school list */
const getStationaryList = async () => {
    return Stationary.find({ $or: [{ is_active: true }] });
};

/** Get Stationary by Id */
const getStationaryById = async (stationaryId) => {
    return Stationary.findById(stationaryId);
};

/** Update Stationary by Id */
const updateStationaryDetails = async (stationaryId, update) => {
    return Stationary.findByIdAndUpdate(stationaryId, { $set: update });
};

/** Delete Stationary */
const deleteStationary = async (stationaryId) => {
    return Stationary.findByIdAndDelete(stationaryId);
};

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryById,
    updateStationaryDetails,
    deleteStationary
};
