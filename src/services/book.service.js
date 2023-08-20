const { Book } = require("../models");

/* Create book */
const createBook = async (reqBody) => {
    return Book.create(reqBody);
};

/* Get user */
// const getBookList = async () => {
//     return Book.find();
// }

module.exports = {
    createBook,
    // getUserList
}