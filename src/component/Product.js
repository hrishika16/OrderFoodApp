import React from "react";
import veg from "../img/veg.png";

function Product(props) {
	const { product, onRemove, onAdd, item } = props;
	return (
		<div className="box_1a" key={product.id}>
			<div className="div_box_prop">
				<img src={product.img} alt="food image" className="food_img" />

				<div className="div_box">
					<img src={veg} alt="vegetarin food" className=" veg_img" />
					<p className="">{product.title}</p>
				</div>

				<div className="div_box_1">
					<p>{product.price}</p>
					<div>
						{item ? (
							<div className="box_adminus">
								<button onClick={() => onRemove(item)} className="remove_btn">
									-
								</button>
								{item.qty}
								<button onClick={() => onAdd(item)} className="remove_btn">
									+
								</button>
							</div>
						) : (
							<button onClick={() => onAdd(product)} className="add_btn">
							<span className="remove_btn">+</span> ADD
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
