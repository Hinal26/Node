const express = require("express");
const { schoolValidation } = require("../../validation");
const { schoolController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create school */
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
);

/** Get school list */
router.get(
    "/school-list",
    validate(schoolValidation.getSchoolList),
    schoolController.getSchoolList
);

/** Get school details by id */
router.get(
    "/get-school-details/:schoolId",
    validate(schoolValidation.getSchoolDetails),
    schoolController.getSchoolDetails
);

/** school details update by id */
router.put(
    "/update-school-details/:schoolId",
    validate(schoolValidation.updateSchoolDetails),
    schoolController.updateSchoolDetails
);

/** Delete school */
router.delete(
    "/delete-school/:schoolId",
    validate(schoolValidation.getSchoolDetails),
    schoolController.deleteSchool
);

module.exports = router;
