import React, { useEffect } from "react";
import Header from "./Header";
import allfood from "../img/allfood.jpg";
import "../css/main.css";
import Footer from "./Footer";
import Product from "./Product";
import $ from 'jquery';

function Special(props) {

	const { products, onAdd, onRemove, cartItems , countCartItems} = props;

	useEffect(() => {
		// $("button").click(function(){
		// 	$("p").toggle();
		//   });
	}, [])
	

	return (
		<div className="space_1">
			<Header />
			<div className="container-fluid mt-4">
				<div className="main_img">
					<img src={allfood} alt="food image" className="allfood_img" />
				</div>
				<div><a
					data-toggle="collapse"
					className="special_a some"
					href="#collapseExample"
					aria-controls="collapseExample">
					{/* > */}
					<span>Today's Special</span>
				</a>
</div>
				<div className="collapse" id="collapseExample">
					<div className="card_a card card-body">
						<div className="box_1">
							{products.map((product) => (
								<Product
									key={product.id}
									product={product}
									item = {cartItems.find((x) => x.id === product.id)}
									onAdd = {onAdd}
									onRemove = {onRemove}
								/>
							))}
						</div>
					</div>
				</div>
				<Footer countCartItems={countCartItems} />
			</div>
		</div>
	);
}

export default Special;
