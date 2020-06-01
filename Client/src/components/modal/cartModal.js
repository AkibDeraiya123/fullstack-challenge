import React, { useState } from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	} from "reactstrap";
import { createOrder } from '../../services/api';
import { toast } from "react-toastify";

const ModalExample = (props) => {
	const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [isPriceInUSD, setIsPriceInUSD] = useState(false);
	
	const handleSubmit = (e) => {

        const cartItems=props.products.filter(data=> data.addedToCart && +data.addedToCart>0)
        const  itemTotal=calculateTotal(props.products);

        if(cartItems.length ){
        const requestOptions = {
                method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                order_items:cartItems,
                order_total:itemTotal,
                name:name,
                address:address
                })
            };

            createOrder(requestOptions).then(data=>{
				if(data.status){
					props.reset();
					toast.success("Order Placed Successfully")
					props.hide();
				}

				else{
					props.hide();
				}
            })
			 }

        e.preventDefault();
        
    }

	function calculateTotal(product) {
		if (product.length) {
			let total = 0;

			for (let i = 0; i < product.length; i++) {
				if (product[i].addedToCart && product[i].addedToCart > 0) {
					total += product[i].price * product[i].addedToCart;
				}
			}

			return total;
		}
		return 0;
	}

	return (
		<div>
			<Modal size="lg" isOpen={props.isShowing} toggle={props.hide}>
				<ModalHeader toggle={props.hide}>My Cart </ModalHeader>
				<ModalBody>
					<table className="table table-image">
						<thead>
							<tr>
								{/* <th scope="col"></th> */}
								<th scope="col">Item</th>
								<th scope="col">Amount</th>
								<th scope="col">
									Qty
								</th>
								<th scope="col">Total</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{props.products.map(
								(product, index) =>
									product.addedToCart &&
									product.addedToCart > 0 ? (
										<tr>
											{/* <td className="w-25">
												<img
													src={product.image}
													className="img-fluid img-thumbnail"
													alt="Sheep"
												/>
											</td> */}
											<td>{product.product_name}</td>
											<td>&euro; {product.price}</td>
											<td className="qty">
												<div className="d-inline ">
													{product.available_quantity >
													0 ? (
														<>
															<i
																className="fa fa-plus p-2"
																aria-hidden="true"
																onClick={() =>
																	props.updateCart(
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
																className="fa fa-minus p-2"
																aria-hidden="true"
																onClick={() =>
																	product[
																		"addedToCart"
																	] > 0 &&
																	props.updateCart(
																		index,
																		"remove"
																	)
																}
															></i>
														</>
													) : (
														<code>
															Out of stock
														</code>
													)}
												</div>
											</td>
											<td>
												&euro; {product.price *
													product.addedToCart}
											</td>
											<td>
												<button
													onClick={()=>{props.updateCart(index,'delete')}}
													className="btn btn-danger btn-sm"
												>
													Remove Item
												</button>
											</td>
										</tr>
									):null
							)}
						</tbody>
					</table>
					<div >
						<label className="float-left">
							<input type="checkbox" className="mr-2" checked={isPriceInUSD} onChange={() => { setIsPriceInUSD(!isPriceInUSD) }} />
							Checkout in US Dollars
						</label>
						<h5 className="float-right">
							Total:{" "}
							{
								isPriceInUSD ? 
									<span className="price text-primary">
										${(calculateTotal(props.products) * 1.11).toFixed(2)}
									</span>
								:
									<span className="price text-primary">
										&euro; {calculateTotal(props.products)}
									</span>
							}
							
						</h5>
					</div>
				</ModalBody>
				<ModalFooter>
					<form onSubmit={handleSubmit}>
						
						<div className="form-group">
							<label for="exampleInputPassword1">Delivery Address</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputPassword1"
								value={address}
								onChange={(event) => {
									setAddress(event.target.value);
								}}
								placeholder="Address"
								required
							/>
						</div>

					    <div className="form-group">
							<label for="exampleInputEmail1">Customer Name</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								value={name}
								onChange={(event) => {
									setName(event.target.value);
								}}
								placeholder="Enter Customer Name"
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary float-right">
							Confirm Order
						</button>
					</form>
					{/* <Button color="primary" >Do Something</Button>{' '}
          <Button color="secondary" >Cancel</Button> */}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalExample;
