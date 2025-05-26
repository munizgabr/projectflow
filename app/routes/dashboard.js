const express = require('express');
const DashboardController = require('../controllers/DashboardController');
const router = express.Router();

const dashboardController = new DashboardController();

router.get('/', dashboardController.index);

module.exports = router;
