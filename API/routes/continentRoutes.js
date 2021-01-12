const express = require("express");
const router = express.Router();
const continentController = require("../controllers/continentController");

router
    .route("/")
    .get(continentController.getAllContinents);



module.exports = router;
