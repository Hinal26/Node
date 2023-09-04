const express = require("express");
const { categoryValidation } = require("../../validation");
const { categoryController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create category */
router.post(
    "/creat-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

module.exports = router;