import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Store() {
	return (
		<>
			<div className="space_1">
				<Header />
				<div className="cart_ety">
					{" "}
					<h1>Store</h1>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Store;
