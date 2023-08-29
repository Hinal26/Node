const express = require("express");
const { busValidation } = require("../../validation");
const { busController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create bus */
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);

/** Get bus list */
router.get(
    "/bus-list",
    validate(busValidation.getBusList),
    busController.getBusList
);

// /** Get bus details by id */
// router.get(
//     "/get-bus-details/:busId",
//     validate(busValidation.getBusDetails),
//     busController.getBusDetails
// );

// /** bus details update by id */
// router.put(
//     "/update-bus-details/:busId",
//     validate(busValidation.updateBusDetails),
//     busController.updateBusDetails
// );

// /** Delete bus */
// router.delete(
//     "/delete-bus/:busId",
//     validate(busValidation.getBusDetails),
//     busController.deleteBus
// );

module.exports = router;
