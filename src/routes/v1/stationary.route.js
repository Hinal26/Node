const express = require("express");
const { stationaryValidation } = require("../../validation");
const { stationaryController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create stationary */
router.post(
    "/create-stationary",
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
);

/** Get stationary list */
router.get(
    "/stationary-list",
    validate(stationaryValidation.getStationaryList),
    stationaryController.getStationaryList
);

/** Get stationary details by id */
router.get(
    "/get-stationary-details/:stationaryId",
    validate(stationaryValidation.getStationaryDetails),
    stationaryController.getStationaryDetails
);

/** stationary details update by id */
router.put(
    "/update-stationary-details/:stationaryId",
    validate(stationaryValidation.updateStationaryDetails),
    stationaryController.updateStationaryDetails
);

/** Delete stationary */
router.delete(
    "/delete-stationary/:schoolId",
    validate(stationaryValidation.getStationaryDetails),
    stationaryController.deleteStationary
);

module.exports = router;
