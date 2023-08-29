const { User } = require("../models");

/** Create user */
const createUser = async (reqBody) => {
    return User.create(reqBody);
}

/** Get user list */
const getUserList = async () => {
    return User.find({ $or: [{ is_active: true }] });
};

/** Get user by Id */
const getUserById = async (userID) => {
    return User.findById(userID);
};

/** Update user by Id */
const updateUserDetails = async (userID, update) => {
    return User.findByIdAndUpdate(userID, { $set: update });
};

/** Delete user */
const deleteUser = async (userID) => {
    return User.findByIdAndDelete(userID);
};

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateUserDetails,
    deleteUser
};
