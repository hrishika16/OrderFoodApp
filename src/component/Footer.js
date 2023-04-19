import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
	const { countCartItems } = props;

	return (
		<div className="row_flex">
			<button className="thunder_btn"></button>
			<button className="bookmark_btn"></button>
			<Link to="/cart">
			<button className="cart_btn">
				{countCartItems ? (
					<span className="position-absolute badge rounded-pill bg-danger">
						{countCartItems}
					</span>
				) : (
					''
				)}
			</button> {' '}
			</Link>
		</div>
	);
}

export default Footer;
