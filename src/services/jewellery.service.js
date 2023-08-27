const { Jewellery } = require("../models");

/** Create jewellery */
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
}

/** Get jewellery list */
const getJewelleryList = async () => {
    return Jewellery.find({ $or: [{ is_active: false }] });
};

/** Get jewellery by Id */
const getJewelleryById = async (jewelleryID) => {
    return Jewellery.findById(jewelleryID);
};

/** Update jewellery by Id */
const updateJewelleryDetails = async (jewelleryID, update) => {
    return Jewellery.findByIdAndUpdate(jewelleryID, { $set: update });
};

/** Delete jewellery */
const deleteJewellery = async (jewelleryID) => {
    return Jewellery.findByIdAndDelete(jewelleryID);
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryById,
    updateJewelleryDetails,
    deleteJewellery
};
