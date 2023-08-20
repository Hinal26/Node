const { bookService } = require('../services');

/* Create book */
const createBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);
        if (!book) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { reqBody },
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBook
}