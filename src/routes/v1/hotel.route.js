const express = require("express");
const { hotelValidation } = require("../../validation");
const { hotelController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create hotel */
router.post(    "/creat-hotel",

    validate(hotelValidation.createHotel),
    hotelController.createHotel
);

/** Get hotel list */
router.get(
    "/hotel-list",
    validate(hotelValidation.getHotelList),
    hotelController.getHotelList
);

/** Get hotel details by id */
router.get(
    "/get-hotel-details/:hotelId",
    validate(hotelValidation.getHotelDetails),
    hotelController.getHotelDetails
);

/** hotel details update by id */
router.put(
    "/update-hotel-details/:hotelId",
    validate(hotelValidation.updateHotelDetails),
    hotelController.updateHotelDetails
);

/** Delete hotel */
router.delete(
    "/delete-hotel/:hotelId",
    validate(hotelValidation.getHotelDetails),
    hotelController.deleteHotel
);

module.exports = router;
