const express = require("express");
const { travelValidation } = require("../../validation");
const { travelController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create travel */
router.post(
    "/create-travel",
    validate(travelValidation.createTravel),
    travelController.createTravel
);

/** Get travel list */
router.get(
    "/travel-list",
    validate(travelValidation.getTravelList),
    travelController.getTravelList
);

/** Get travel details by id */
router.get(
    "/get-travel-details/:travelId",
    validate(travelValidation.getTravelDetails),
    travelController.getTravelDetails
);

/** travel details update by id */
router.put(
    "/update-travel-details/:travelId",
    validate(travelValidation.updateTravelDetails),
    travelController.updateTravelDetails
);

/** Delete travel */
router.delete(
    "/delete-travel/:travelId",
    validate(travelValidation.getTravelDetails),
    travelController.deleteTravel
);

module.exports = router;
