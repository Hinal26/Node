const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);

        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get user list */
const getUserList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getUser = await userService.getUserList(reqBody);
        if (!getUser) {
            throw new Error("User list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: getUser,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
    try {
        const userID = req.params.getUserList;
        const getDetails = await userService.getUserById(userID);
        if (!getDetails) {
            throw new Error("User details not found!");
        }

        res.status(200).json({
            success: true,
            message: "User details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** user details update by id */
const updateUserDetails = async (req, res) => {
    try {
        const userID = req.params.userID;
        const getDetails = await userService.getUserById(userID);
        if (!getDetails) {
            throw new Error("User not found!");
        }

        await userService.updateUserDetails(userID, req.body);

        res.status(200).json({ success: true, message: "User details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete user */
const deleteUser = async (req, res) => {
    try {
        const userID = req.params.userID;
        const getDetails = await userService.getUserById(userID);
        if (!getDetails) {
            throw new Error("User not found!");
        }

        await userService.deleteUser(userID);

        res.status(200).json({
            success: true,
            message: "User delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUserDetails,
    deleteUser
};
