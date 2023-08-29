const express = require("express");
const { userValidation } = require("../../validation");
const { userController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/** Get user list */
router.get(
    "/user-list",
    validate(userValidation.getUserList),
    userController.getUserList
);

/** Get user details by id */
router.get(
    "/get-user-details/:userId",
    validate(userValidation.getUserDetails),
    userController.getUserDetails
);

/** user details update by id */
router.put(
    "/update-user-details/:userId",
    validate(userValidation.updateUserDetails),
    userController.updateUserDetails
);

/** Delete user */
router.delete(
    "/delete-user/:userId",
    validate(userValidation.getUserDetails),
    userController.deleteUser
);

module.exports = router;
