const { schoolService } = require("../services");

/** create school */
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.createSchool(reqBody);

        res.status(200).json({
            success: true,
            message: "School create successfully!",
            data: { school },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school list */
const getSchoolList = async (req, res) => {
    try {
        const reqBody = req.body;

        const getSchool = await schoolService.getSchoolList(reqBody);
        if (!getSchool) {
            throw new Error("School list not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get school list successfully!",
            data: getSchool,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school details by id */
const getSchoolDetails = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const getDetails = await schoolService.getSchoolById(schoolId);
        if (!getDetails) {
            throw new Error("School details not found!");
        }

        res.status(200).json({
            success: true,
            message: "School details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** user details update by id */
const updateSchoolDetails = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const getDetails = await schoolService.getSchoolById(schoolId);
        if (!getDetails) {
            throw new Error("School not found!");
        }

        await schoolService.updateSchoolDetails(schoolId, req.body);

        res.status(200).json({ success: true, message: "School details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete user */
const deleteSchool = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const getDetails = await schoolService.getSchoolById(schoolId);
        if (!getDetails) {
            throw new Error("School not found!");
        }

        await schoolService.deleteSchool(schoolId);

        res.status(200).json({
            success: true,
            message: "School delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolDetails,
    updateSchoolDetails,
    deleteSchool
};
