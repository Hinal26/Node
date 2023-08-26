const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotel = await hotelService.createHotel(reqBody);

        res.status(200).json({
            success: true,
            message: "Hotel create successfully!",
            data: { hotel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get hotel list */
const getHotelList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getHotel = await hotelService.getHotelList(reqBody);
        if (!getHotel) {
            throw new Error("Hotel list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get hotel list successfully!",
            data: getHotel,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get hotel details by id */
const getHotelDetails = async (req, res) => {
    try {
        const hotelId = req.params.schoolId;
        const getDetails = await hotelService.getHotelById(hotelId);
        if (!getDetails) {
            throw new Error("Hotel details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Hotel details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Hotel details update by id */
const updateHotelDetails = async (req, res) => {
    try {
        const hotelId = req.params.schoolId;
        const getDetails = await hotelService.getHotelById(hotelId);
        if (!getDetails) {
            throw new Error("Hotel not found!");
        }

        await hotelService.updateHotelDetails(hotelId, req.body);

        res.status(200).json({ success: true, message: "Hotel details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete Hotel */
const deleteHotel = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        const getDetails = await hotelService.getHotelById(hotelId);
        if (!getDetails) {
            throw new Error("Hotel not found!");
        }

        await hotelService.deleteHotel(hotelId);

        res.status(200).json({
            success: true,
            message: "School delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelDetails,
    updateHotelDetails,
    deleteHotel
};
