const express = require("express");
const { mobileValidation } = require("../../validation");
const { mobileController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create mobile */
router.post(
    "/create-mobile",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
);

/** Get mobile list */
router.get(
    "/mobile-list",
    validate(mobileValidation.getMobileList),
    mobileController.getMobileList
);

/** Get mobile details by id */
router.get(
    "/get-mobile-details/:mobileId",
    validate(mobileValidation.getMobileDetails),
    mobileController.getMobileDetails
);

/** mobile details update by id */
router.put(
    "/update-mobile-details/:mobileId",
    validate(mobileValidation.updateMobileDetails),
    mobileController.updateMobileDetails
);

/** Delete mobile */
router.delete(
    "/delete-mobile/:mobileId",
    validate(mobileValidation.getMobileDetails),
    mobileController.deleteMobile
);

module.exports = router;
