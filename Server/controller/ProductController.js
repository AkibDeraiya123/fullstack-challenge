// Database model
const product = require("../modal/productModal");

module.exports = {
	// Add new item
	async createProduct(req, res) {
		try {
			let productData = req.body;

			const productStatus = await product.createProduct(productData);

			if (productStatus) {
				return res.status(200).json({
					status: true,
					message: "Products Added Successfully",
					product: productStatus
				});
			} else {
				// Some error occurs
				return res.status(400).json({
					status: false,
					message: "Something went wrong"
				});
			}
		} catch (error) {
			// Some error occurs
			return res.status(500).json({
				status: false,
				message: "Something went wrong. Please try again"
			});
		}
	},
	// Get all active items to list in frontend
	async getActiveProducts(req, res) {
		try {
			const products = await product.getActiveProducts();

			return res.status(200).json({
				status: true,
				message: "Products fetched successfully",
				product: products && products.length ? products : []
			});
		} catch (error) {
			// Some error occurs
			return res.status(500).json({
				status: false,
				message: "Something went wrong. Please try again"
			});
		}
	}
};
