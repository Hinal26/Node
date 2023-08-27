const { stationaryService } = require("../services");

/** create stationary */
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.createStationary(reqBody);

        res.status(200).json({
            success: true,
            message: "Stationary create successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get stationary list */
const getStationaryList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getStationary = await stationaryService.getStationaryList(reqBody);
        if (!getStationary) {
            throw new Error("Stationary list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get Stationary list successfully!",
            data: getStationary,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get stationary details by id */
const getStationaryDetails = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;
        const getDetails = await stationaryService.getStationaryById(stationaryId);
        if (!getDetails) {
            throw new Error("Stationary details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Stationary details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** stationary details update by id */
const updateStationaryDetails = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;
        const getDetails = await stationaryService.getStationaryById(stationaryId);
        if (!getDetails) {
            throw new Error("Stationary not found!");
        }

        await stationaryService.updateStationaryDetails(stationaryId, req.body);

        res.status(200).json({ success: true, message: "Stationary details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete stationary */
const deleteStationary = async (req, res) => {
    try {
        const stationaryId = req.params.schoolId;
        const getDetails = await stationaryService.getStationaryById(stationaryId);
        if (!getDetails) {
            throw new Error("Stationary not found!");
        }

        await stationaryService.deleteStationary(stationaryId);

        res.status(200).json({
            success: true,
            message: "Stationary delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryDetails,
    updateStationaryDetails,
    deleteStationary
};
