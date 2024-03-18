const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

router.post('/totalcost', deliveryController.calculateDeliveryCost);

module.exports = router;
