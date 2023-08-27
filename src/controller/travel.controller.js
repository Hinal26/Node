const { travelService } = require("../services");

/** create travel */
const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const travel = await travelService.createTravel(reqBody);

        res.status(200).json({
            success: true,
            message: "Travel create successfully!",
            data: { travel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get travel list */
const getTravelList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getTravel = await travelService.getTravelList(reqBody);
        if (!getTravel) {
            throw new Error("Travel list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get travel list successfully!",
            data: getTravel,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get travel details by id */
const getTravelDetails = async (req, res) => {
    try {
        const travelId = req.params.travelId;
        const getDetails = await travelService.getTravelById(travelId);
        if (!getDetails) {
            throw new Error("Travel details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Travel details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** travel details update by id */
const updateTravelDetails = async (req, res) => {
    try {
        const travelId = req.params.travelId;
        const getDetails = await travelService.getTravelById(travelId);
        if (!getDetails) {
            throw new Error("Travel not found!");
        }

        await travelService.updateTravelDetails(travelId, req.body);

        res.status(200).json({ success: true, message: "Travel details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete travel*/
const deleteTravel = async (req, res) => {
    try {
        const travelId = req.params.travelId;
        const getDetails = await travelService.getTravelById(travelId);
        if (!getDetails) {
            throw new Error("Travel not found!");
        }

        await travelService.deleteTravel(travelId);

        res.status(200).json({
            success: true,
            message: "Travel delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelDetails,
    updateTravelDetails,
    deleteTravel
};
