const { Music } = require("../models");

/** Create music */
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
}

/** Get music list */
const getMusicList = async () => {
    return Music.find({ $or: [{ is_active: true }] });
};

/** Get music by Id */
const getMusicById = async (musicId) => {
    return Music.findById(musicId);
};

/** Update music by Id */
const updateMusicDetails = async (musicId, update) => {
    return Music.findByIdAndUpdate(musicId, { $set: update });
};

/** Delete music */
const deleteMusic = async (musicId) => {
    return Music.findByIdAndDelete(musicId);
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicById,
    updateMusicDetails,
    deleteMusic
};
