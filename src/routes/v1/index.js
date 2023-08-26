const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require('./book.route');
const schoolRoute = require('./school.route');
const hotelRoute = require('./hotel.route');
const movieRoute = require('./movie.route');
const busRoute = require('./bus.route');
const musicRoute = require('./music.route');



const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/books", bookRoute);
router.use("/school", schoolRoute);
router.use("/hotel", hotelRoute);
router.use("/movie", movieRoute);
router.use("/bus", busRoute);
router.use("/music", musicRoute);



module.exports = router;