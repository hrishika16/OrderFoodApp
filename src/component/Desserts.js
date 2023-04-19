import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Desserts() {
	return (
		<>
			<div className="space_1">
				<Header />
				<div className="cart_ety">
					{" "}
					<h1>Desserts</h1>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Desserts;
