// database modal
const order = require("../modal/orderModal");

module.exports = {
	// Create a new order
	async createOrder(req, res) {
		try {
			let orderData
			
			const orderStatus = await order.createOrder(orderData);

			if (orderStatus) {
				return res.status(200).json({
					status: true,
					message: "Order places successfully",
					order: orderStatus,
				});
			} else {
				// Some error occurs 
				return res.status(400).json({
					status: false,
					message: "Something went wrong. Please try again"
				});
			}
		} catch(error) {
			// Some error occurs
			return res.status(500).json({
				status: false,
				message: "Something went wrong. Please try again"
			});
		}
	}
};
