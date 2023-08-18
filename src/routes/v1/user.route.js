const express = require("express");
const { userValidation } = require("../../validation");
const { userController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create user */
router.post(
    "/create-user",
    // validate(userValidation.createUser),
    userController.createUser
);

module.exports = router;
