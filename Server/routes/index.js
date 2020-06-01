// Node modules
const express = require("express");

// Initialise express route
const router = express.Router();

// Routes for different modals
const ProductRoutes = require("./ProductRoutes");
const OrderRoutes = require("./OrderRoutes");

// middleware to use for all requests
router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header");
	req.isApi = true;
	next(); // make sure we go to the next routes and don't stop here
});

module.exports = function (app) {
	router.use(ProductRoutes);
	router.use(OrderRoutes);

	app.use("/api", router);
};
