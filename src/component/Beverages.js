import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Beverages() {
	return (
		<>
			<div className="space_1">
				<Header />
				<div className="cart_ety">
					{" "}
					<h1>Beverages</h1>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Beverages;
