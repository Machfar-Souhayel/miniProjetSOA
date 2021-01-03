const countryModel = require("../models/countryModel");

// @desc      Get all countries
// @route     GET /api/v1/countries
// @access    Public
const getAllCountries = async (req, res) => {
  try {
    const countries = await countryModel.getAllCountriesMethod();
    res.status(200).json({
      success: "True",
      data: countries
    });
  } catch (err) {
    res.status(200).json({
      success: "false",
      message: err.message
    });
  }
};

// @desc      Get single country
// @route     GET /api/v1/country
// @access    Public
const getCountry = async (req, res) => {
  try {
    const countryISOCode = req.params.countryISOCode;
    const details = await countryModel.getCountryDetailsMethod(countryISOCode);
    res.status(200).json({
      success: "True",
      data: {
        capital: details.capital,
        flag: details.flag
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
  getAllCountries,
  getCountry,
};