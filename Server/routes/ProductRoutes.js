// Node modules
const express = require("express");

// Initialise router
const router = express.Router();

// Controllers
const ProductController = require("../controller/ProductController");

// Add new product
router.post("/product", ProductController.createProduct);
// Get all active products to list down in frontend
router.get("/product/active", ProductController.getActiveProducts);

module.exports = router;
