const { Movie } = require("../models");

/** Create bus */
const createBus = async (reqBody) => {
    return Bus.create(reqBody);
}

/** Get bus list */
const getBusList = async () => {
    return Bus.find({ $or: [{ is_active: false }] });
};

/** Get bus by Id */
const getBusById = async (busId) => {
    return Bus.findById(busId);
};

/** Update bus by Id */
const updateBusDetails = async (busId, update) => {
    return Bus.findByIdAndUpdate(busId, { $set: update });
};

/** Delete bus */
const deleteBus = async (busId) => {
    return Bus.findByIdAndDelete(busId);
};

module.exports = {
    createBus,
    getBusList,
    getBusById,
    updateBusDetails,
    deleteBus
};
