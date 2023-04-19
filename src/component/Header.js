import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import $ from 'jquery';
// import $ from "jquery";

function Header() {

	useEffect(() => {
		// var pathname = window.location.pathname;
		// console.log(pathname);
		// $(function() {
		// 	$('a[href^="/' + window.location.pathname.split("/")[1] + '"]').addClass('current');
		//   });
	}, [])
	

	return (
		<React.Fragment>
			<div className="temp">
				<div className="cart_row curr_1">
					<div >
						<h5>Sacred Earth Cafe</h5>
					</div>
					<div >
						<button className="btn_pep"></button>
						<button className="btn_hash ml-2"></button>
					</div>
				</div>

				<div>
					<div className="scrollmenu">
						<Link className="head_link" to="/">
							Special
						</Link>
						<Link className="head_link" to="/food">
							Food
						</Link>
						<Link className="head_link" to="/desserts">
							Desserts
						</Link>
						<Link className="head_link" to="/beverages">
							Beverages
						</Link>
						<Link className="head_link" to="/store">
							Store
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
