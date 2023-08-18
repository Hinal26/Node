const { categoryService } = require('../services');

/* Create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await categoryService.createCategory(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: { reqBody },
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategory
}