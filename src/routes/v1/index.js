const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require('./book.route');
const schoolRoute = require('./school.route')

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/books", bookRoute);
router.use("/school", schoolRoute);

module.exports = router;