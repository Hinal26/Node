const { pharmacyService } = require("../services");

/** create pharmacy */
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.createPharmacy(reqBody);

        res.status(200).json({
            success: true,
            message: "Pharmacy create successfully!",
            data: { pharmacy },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get pharmacy list */
const getPharmacyList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getPharmacy = await pharmacyService.getPharmacyList(reqBody);
        if (!getPharmacy) {
            throw new Error("Pharmacy list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get Pharmacy list successfully!",
            data: getPharmacy,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get pharmacy details by id */
const getPharmacyDetails = async (req, res) => {
    try {
        const pharmacyID = req.params.schoolId;
        const getDetails = await pharmacyService.getPharmacyById(pharmacyID);
        if (!getDetails) {
            throw new Error("Pharmacy details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Pharmacy details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** pharmacy details update by id */
const updatePharmacyDetails = async (req, res) => {
    try {
        const pharmacyID = req.params.pharmacyID;
        const getDetails = await pharmacyService.getPharmacyById(schoolId);
        if (!getDetails) {
            throw new Error("Pharmacy not found!");
        }

        await pharmacyService.updatePharmacyDetails(pharmacyID, req.body);

        res.status(200).json({ success: true, message: "Pharmacy details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete pharmacy */
const deletePharmacy = async (req, res) => {
    try {
        const pharmacyID = req.params.pharmacyID;
        const getDetails = await pharmacyService.getPharmacyById(schoolId);
        if (!getDetails) {
            throw new Error("Pharmacy not found!");
        }

        await pharmacyService.deletePharmacy(pharmacyID);

        res.status(200).json({
            success: true,
            message: "Pharmacy delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyDetails,
    updatePharmacyDetails,
    deletePharmacy
};
