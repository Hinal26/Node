const { mobileService } = require("../services");
const { getMobileById } = require("../services/mobile.service");

/** create mobile */
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.createMobile(reqBody);

        res.status(200).json({
            success: true,
            message: "Mobile creat successfully!",
            data: { mobile },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get mobile list */
const getMobileList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getMobile = await mobileService.getMobileList(reqBody);
        if (!getMobileById) {
            throw new Error("Mobile list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get mobile list successfully!",
            data: getSchool,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get mobile details by id */
const getMobileDetails = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const getDetails = await mobileService.getMobileById(mobileId);
        if (!getDetails) {
            throw new Error("Mobile details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Mobile details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** mobile details update by id */
const updateMobileDetails = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const getDetails = await mobileService.getMobileById(mobileId);
        if (!getDetails) {
            throw new Error("Mobile not found!");
        }

        await mobileService.updateMobileDetails(mobileId, req.body);

        res.status(200).json({ success: true, message: "Mobile details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete mobile */
const deleteMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const getDetails = await mobileService.getMobileById(mobileId);
        if (!getDetails) {
            throw new Error("Mobile not found!");
        }

        await mobileService.deleteMobile(mobileId);
        res.status(200).json({
            success: true,
            message: "Mobile delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createMobile,
    getMobileList,
    getMobileDetails,
    updateMobileDetails,
    deleteMobile
};
