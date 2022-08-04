const express = require("express");
const router = express.Router();
const { dashboardController } = require("../../controllers/dashboard");

router.get('/mostPopularProduct', dashboardController.mostPopularProducts);

module.exports = router;