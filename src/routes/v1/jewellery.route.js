const express = require("express");
const { jewelleryValidation } = require("../../validation");
const jewelleryController  = require("../../controller/jewellery.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create jewellery */
router.post(
    "/create-jewellery",
    validate(jewelleryValidation.createJewellery),
    jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
    "/jewellery-list",
    validate(jewelleryValidation.getJewelleryList),
    jewelleryController.getJewelleryList
);

/** Get jewellery details by id */
router.get(
    "/get-jewellery-details/:jewelleryId",
    validate(jewelleryValidation.getJewelleryDetails),
    jewelleryController.getJewelleryDetails
);

// /** jewellery details update by id */
// router.put(
//     "/update-jewellery-details/:jewelleryId",
//     validate(jewelleryValidation.updateJewellerDetails),
//     jewelleryController.updateJewellerDetails
// );

/** Delete jewellery */
router.delete(
    "/delete-jewellery/:jewelleryId",
    validate(jewelleryValidation.getJewelleryDetails),
    jewelleryController.deleteJewellery
);

module.exports = router;
