import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function Food(props) {
	const { products, onAdd, onRemove, cartItems, countCartItems } = props;
	return (
		<div className="space_1">
			<Header />
			<div className="container-fluid mt-4">
			<a
				data-toggle="collapse"
				className="special_a some"
				href="#food"
				aria-controls="food">
				Acai Bowls
			</a>
			<div className="collapse" id="food">
				<div className="card card-body">
					{products.map((product) => (
						<Main
							key={product.id}
							product={product}
							item={cartItems.find((x) => x.id === product.id)}
							onAdd={onAdd}
							onRemove={onRemove}
						/>
					))}
				</div>
			</div>
			</div>
			<Footer countCartItems={countCartItems} />
		</div>
	);
}

export default Food;
