// Node modules
const express = require("express");

// Initialise router
const router = express.Router();

// Controllers
const OrderController = require("../controller/OrderController");

// Add new order
router.post("/order", OrderController.createOrder);

module.exports = router;
