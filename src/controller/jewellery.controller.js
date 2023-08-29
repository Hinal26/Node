const { jewelleryService } = require("../services");

/** create jewellery */
const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellery = await jewelleryService.createJewellery(reqBody);

        res.status(200).json({
            success: true,
            message: "Jewellery create successfully!",
            data: { jewellery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get jewellery list */
const getJewelleryList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getJewellery = await jewelleryService.getJewelleryList(reqBody);
        if (!getJewellery) {
            throw new Error("jewellery list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get jewellery list successfully!",
            data: getJewellery,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get jewellery details by id */
const getJewelleryDetails = async (req, res) => {
    try {
        const jewelleryID = req.params.jewelleryID;
        const getDetails = await jewelleryService.getJewelleryById(jewelleryID);
        if (!getDetails) {
            throw new Error("jewellery details not found!");
        }

        res.status(200).json({
            success: true,
            message: "jewellery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** jewellery details update by id */
const updateJewelleryDetails = async (req, res) => {
    try {
        const jewelleryID = req.params.jewelleryID;
        const getDetails = await jewelleryService.getJewelleryById(schoolId);
        if (!getDetails) {
            throw new Error("jewellery not found!");
        }

        await jewelleryService.updateJewelleryDetails(jewelleryID, req.body);

        res.status(200).json({ success: true, message: "jewellery details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete jewellery */
const deleteJewellery = async (req, res) => {
    try {
        const jewelleryID = req.params.jewelleryID;
        const getDetails = await jewelleryService.getJewelleryById(jewelleryID);
        if (!getDetails) {
            throw new Error("jewellery not found!");
        }

        await jewelleryService.deleteJewellery(jewelleryID);

        res.status(200).json({
            success: true,
            message: "jewellery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    updateJewelleryDetails,
    deleteJewellery
};
