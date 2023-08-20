const express = require("express");
const { bookValidation } = require("../../validation");
const { bookController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create user */
router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookController.createBook
);

module.exports = router;
