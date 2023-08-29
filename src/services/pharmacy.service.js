const { Pharmacy } = require("../models");

/** Create pharmacy */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
}

/** Get pharmacy list */
const getPharmacyList = async () => {
    return Pharmacy.find({ $or: [{ is_active: true }] });
};

/** Get pharmacy by Id */
const getPharmacyById = async (pharmacyId) => {
    return Pharmacy.findById(pharmacyId);
};

/** Update pharmacy by Id */
const updatePharmacyDetails = async (pharmacyId, update) => {
    return Pharmacy.findByIdAndUpdate(pharmacyId, { $set: update });
};

/** Delete pharmacy */
const deletePharmacy = async (pharmacyId) => {
    return Pharmacy.findByIdAndDelete(pharmacyId);
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyById,
    updatePharmacyDetails,
    deletePharmacy
};
