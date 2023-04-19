import React,{useState, useEffect} from "react";
import CartHeader from "./CartHeader";
import "../css/cart.css";
import veg from "../img/veg.png";
import forward from "../img/forward.png";
import { Link } from "react-router-dom";

function Cart(props) {
	const { cartItems, onAdd, onRemove, onOrder } = props;

	return (
		<>
			<CartHeader />
			<div className="space_1">
			<div className="container-fluid mt-4">
				{cartItems.length == 0 ? (
					<div className="cart_ety">
						<h1>Cart is Empty</h1>
					</div>
				) : (
					<>
						<a
							data-toggle="collapse"
							className="special_a some"
							href="#currentOrder"
							aria-controls="currentOrder">
							Current Order
						</a>
						<div className="collapse" id="currentOrder">
							<div className="card card-body">
								<div className="curr_body">
									{cartItems.map((item) => (
										<>
											<div key={item.id} className="cart_row curr_1">
												<div className="cart_row">
													<img
														src={veg}
														alt="vegetarin food"
														className=" veg_img"
													/>
													<div className="ml-1">
														<div className="title_font">{item.title}</div>
														<div className="rup_font">{item.price}</div>
													</div>
												</div>
												<div className="box_adminus">
													<button
														onClick={() => onRemove(item)}
														className="remove_btn">
														-
													</button>
													{item.qty}
													<button
														onClick={() => onAdd(item)}
														className="remove_btn">
														+
													</button>
												</div>
											</div>
										</>
									))}
									<div>
										<p className="cook_ins">Add cooking instructions</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cart_foot">
							<p>{cartItems.length} Items</p>
							<Link to="/">
								<button onClick={() => onOrder(cartItems)} className="order_btn">
									PLACE ORDER
									<span>
										<img src={forward} alt="forward" className="forward_img" />
									</span>
								</button>
							</Link>
						</div>
						<div>
						<a
							data-toggle="collapse"
							className="special_a"
							href="#prevOrder"
							aria-controls="prevOrder">
							Previous Order
						</a>
						<div className="collapse" id="prevOrder">
							<div className="card card-body"></div>
						</div>
						</div>
					</>
				)}
				</div>
			</div>
		</>
	);
}

export default Cart;
