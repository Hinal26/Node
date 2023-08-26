const { Hotel } = require("../models");

/** Create hotel */
const createHotel = async (reqBody) => {
    return Hotel.create(reqBody);
}

/** Get hotel list */
const getHotelList = async () => {
    return Hotel.find({ $or: [{ is_active: false }] });
};

/** Get hotel by Id */
const getHotelById = async (hotelId) => {
    return Hotel.findById(hotelId);
};

/** Update hotel by Id */
const updateHotelDetails = async (hotelId, update) => {
    return Hotel.findByIdAndUpdate(hotelId, { $set: update });
};

/** Delete hotel */
const deleteHotel = async (hotelId) => {
    return Hotel.findByIdAndDelete(hotelId);
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelById,
    updateHotelDetails,
    deleteHotel
};
