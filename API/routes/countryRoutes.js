const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

router
  .route("/")
  .get(countryController.getAllCountries);

router
  .route("/:countryISOCode")
  .get(countryController.getCountryName);

router
  .route("/fullInfo/:countryISOCode")
  .get(countryController.getFullCountryInfo);

module.exports = router;
