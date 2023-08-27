const express = require("express");
const { pharmacyValidation } = require("../../validation");
const { pharmacyController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create pharmacy */
router.post(
    "/create-pharmacy",
    validate(pharmacyValidation.createPharmacy),
    pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
    "/pharmacy-list",
    validate(pharmacyValidation.getPharmacyList),
    pharmacyController.getPharmacyList
);

/** Get pharmacy details by id */
router.get(
    "/get-pharmacy-details/:pharmacyId",
    validate(pharmacyValidation.getPharmacyDetails),
    pharmacyController.getPharmacyDetails
);

/** pharmacy details update by id */
router.put(
    "/update-pharmacy-details/:pharmacyId",
    validate(pharmacyValidation.updatePharmacyDetails),
    pharmacyController.updatePharmacyDetails
);

/** Delete pharmacy */
router.delete(
    "/delete-pharmacy/:pharmacyId",
    validate(pharmacyValidation.getPharmacyDetails),
    pharmacyController.deletePharmacy
);

module.exports = router;
