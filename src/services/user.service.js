const { User } = require("../models");

/* Create user */
const createUser = async (reqBody) => {
    return User.create(reqBody);
};

/* Get user */
const getUserList = async () => {
    return User.find();
}

module.exports = {
    createUser,
    getUserList
}