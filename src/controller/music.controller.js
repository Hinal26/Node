const { musicService } = require("../services");

/** create school */
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const music = await musicService.createMusic(reqBody);

        res.status(200).json({
            success: true,
            message: "Music create successfully!",
            data: { school },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school list */
const getMusicList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getMusic = await musicService.getMusicList(reqBody);
        if (!getMusic) {
            throw new Error("Music list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get music list successfully!",
            data: getMusic,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school details by id */
const getMusicDetails = async (req, res) => {
    try {
        const musicId = req.params.schoolId;
        const getDetails = await musicService.getMusicById(musicId);
        if (!getDetails) {
            throw new Error("Music details not found!");
        }

        res.status(200).json({
            success: true,
            message: "Music details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** user details update by id */
const updateMusicDetails = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const getDetails = await musicService.getMusicById(musicId);
        if (!getDetails) {
            throw new Error("Music not found!");
        }

        await musicService.updateMusicDetails(musicId, req.body);

        res.status(200).json({ success: true, message: "Music details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete user */
const deleteMusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const getDetails = await musicService.getMusicById(musicId);
        if (!getDetails) {
            throw new Error("Music not found!");
        }

        await musicService.deleteMusic(musicId);

        res.status(200).json({
            success: true,
            message: "Music delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicDetails,
    updateMusicDetails,
    deleteMusic
};
