import React from "react";
import veg from "../img/veg.png";

function Main(props) {
	const { product, onRemove, onAdd, item } = props;
	return (
		<div className="main_cs" key={product.id}>
			<div className="temp_left">
				<img src={product.img} alt="food items" className="ff_img" />
			</div>
			<div className="temp_right">
				<h5>Sunrise</h5>
                <div className="div_box_1">
                <div className="cart_row">
						<img src={veg} alt="vegetarin food" className="veg_img" />
						<p>{product.price}</p>
					</div>
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

export default Main;
