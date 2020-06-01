import React, { useState, useEffect } from "react";
import StackGrid from "react-stack-grid";
import { getProducts } from "../../services/api";
import CartModal from "../modal/cartModal";
import useModal from "./useModal";

const Products = () => {
	const { isShowing, toggle } = useModal();
	const [products, setProducts] = useState([]);
	const [cartItemCounter, setCartItemCounter] = useState(0);
	useEffect(() => {
		if (products.length === 0) {
			getProducts().then((data) => {
				console.log("data", data);
				
				setProducts(data.product || []);
			});
		}
	}, [products]);

	// update cart when increse and decrese in products
	const updateCart = (index, type) => {
		let menu = [...products];

		if (menu.length && index >= 0) {
			const existingItemInCart = menu[index]["addedToCart"];

			if (menu[index]["addedToCart"]) {
				menu[index]["addedToCart"] =
					type === "add"
						? menu[index]["addedToCart"] + 1
						: menu[index]["addedToCart"] - 1;
				menu[index]["addedToCart"] =
					type === "delete"
						? (menu[index]["addedToCart"] = 0)
						: menu[index]["addedToCart"];
			} else {
				menu[index]["addedToCart"] = type === "add" ? 1 : 0;
			}

			setCartItemCounter(
				type === "add" ? cartItemCounter + 1 :
					type === "delete" ? cartItemCounter - existingItemInCart : cartItemCounter - 1
			);
			setProducts(menu);
		}
	};
	
	// reset the cart when order is completed
	const reset = () => {
		let menu = [...products];
		if (menu.length) {
			menu.map((data) => {
				return (data["addedToCart"] = 0);
			});
			setProducts(menu);
			setCartItemCounter(0);
		}
	};

	return (
		<div className="product-container">
			<div className="w-100 p-3">
				<div className="float-left">
					<h3>Available products</h3>
				</div>
				<div className="float-right">
					<button
						type="button"
						className="btn btn-success"
						onClick={toggle}
					>
						My Cart{" "}
						<span className="badge badge-light">{cartItemCounter}</span>
					</button>

					<CartModal
						isShowing={isShowing}
						hide={toggle}
						products={products}
						updateCart={(index, type) => {
							updateCart(index, type);
						}}
						reset={reset}
					></CartModal>
				</div>
			</div>
			<div className="row col-md-12">
				
					{products.map((product, index) => {
						return (
							<div key={"key" + index} className="col-md-4 mb-3">
								<div className="imgContentBox">
									<img
										src={product.image}
										className="img-responsive postImg"
										alt=""
									/>
									<div className="postDetailBox">
										<div className="Caption">
											{product.product_name}
											<br />
											<b>&euro; {product.price}</b>

											<div className="float-right px-3">
												{product.available_quantity >
													0 ? (
														<>
															<i
																className="fa fa-plus p-2 cartcounter"
																aria-hidden="true"
																onClick={() =>
																	updateCart(
																		index,
																		"add"
																	)
																}
															></i>
															<span className="p-3">
																{product.addedToCart
																	? product.addedToCart
																	: 0}
															</span>
															<i
																className="fa fa-minus p-2 cartcounter"
																aria-hidden="true"
																onClick={() =>
																	product[
																	"addedToCart"
																	] > 0 &&
																	updateCart(
																		index,
																		"remove"
																	)
																}
															></i>
														</>
													) : (
														<code>Out of stock</code>
													)}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Products;
