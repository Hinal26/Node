const { Category } = require("../models");

/* Create category */
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

/* Get category */
const getCategoryList = async () => {
    return Category.find();
}

module.exports = {
    createCategory,
    getCategoryList
}