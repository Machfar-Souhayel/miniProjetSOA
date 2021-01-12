const continentModel = require("../models/continentModel");

// @desc      Get all continents
// @route     GET /api/v1/continents
// @access    Public
const getAllContinents = async (req, res) => {
    try {
        const continents = await continentModel.getAllContinentsMethod();
        res.status(200).json({
            success: "True",
            data: {
                continents: continents
            }
        });
    } catch (err) {
        res.status(200).json({
            success: "false",
            message: err.message
        });
    }
};

module.exports = {
    getAllContinents
}