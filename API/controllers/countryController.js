const countryModel = require("../models/countryModel");

// @desc      Get all countries
// @route     GET /api/v1/countries
// @access    Public
const getAllCountries = async (req, res) => {
  try {
    const countries = await countryModel.getAllCountriesMethod();
    res.status(200).json({
      success: "True",
      data: {
        countries: countries
      }
    });
  } catch (err) {
    res.status(200).json({
      success: "false",
      message: err.message
    });
  }
};

// @desc      Get single country
// @route     GET /api/v1/countries/:countryISOCode
// @access    Public
const getCountryName = async (req, res) => {
  try {
    const countryISOCode = req.params.countryISOCode.toUpperCase();
    const country = await countryModel.getCountryByIsoCodeMethod(countryISOCode);
    res.status(200).json({
      success: "True",
      data: {
        country: country
      }
    });
  } catch (err) {
    res.status(200).json({
      success: "false",
      message: err.message
    });
  }
};

// @desc      Get full country info
// @route     GET /api/v1/countries/fullInfo/:countryISOCode
// @access    Public
const getFullCountryInfo = async (req, res) => {
  try {
    const countryISOCode = req.params.countryISOCode.toUpperCase();
    const country = await countryModel.getFullCountryInfoByIsoCodeMethod(countryISOCode);
    res.status(200).json({
      success: "True",
      data: {
        country: country
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
  getCountryName,
  getFullCountryInfo
};