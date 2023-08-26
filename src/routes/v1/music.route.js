const express = require("express");
const { musicValidation } = require("../../validation");
const { musicController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create school */
router.post(
    "/create-music",
    validate(musicValidation.createMusic),
    musicController.createMusic
);

/** Get school list */
router.get(
    "/music-list",
    validate(musicValidation.getMusicList),
    musicController.getMusicList
);

/** Get school details by id */
router.get(
    "/get-music-details/:musicId",
    validate(musicValidation.getMusicDetails),
    musicController.getMusicDetails
);

/** school details update by id */
router.put(
    "/update-music-details/:musicId",
    validate(musicValidation.updateMusicDetails),
    musicController.updateMusicDetails
);

/** Delete school */
router.delete(
    "/delete-music/:musicId",
    validate(musicValidation.getMusicDetails),
    musicController.deleteMusic
);

module.exports = router;
