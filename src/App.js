import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Special from "./component/Special";
import Desserts from "./component/Desserts";
import Beverages from "./component/Beverages";
import Food from "./component/Food";
import Cart from "./component/Cart";
import Items from "./component/items";
import Store from "./component/Store";


function App() {
	const [cartItems, setcartItems] = useState([]);
  // const [prevItems, setPrevItems] = useState([]);
	const { products } = Items;
  const  prevItemsRef = useRef();

  // useEffect(()=>{
  //   prevItemsRef.current = prevItems;

  // }
  // ,[])

	const onAdd = (product) => {
		const itemExists = cartItems.find((x) => x.id === product.id);
		if (itemExists) {
			const newCartItem = cartItems.map((x) =>
				x.id === product.id ? { ...itemExists, qty: itemExists.qty + 1 } : x
			);
			setcartItems(newCartItem);
		} else {
			const newCartItem = [...cartItems, { ...product, qty: 1 }];
			setcartItems(newCartItem);
		}
	};

	const onRemove = (product) => {
		const itemExists = cartItems.find((x) => x.id === product.id);
		if (itemExists.qty === 1) {
			const newCartItem = cartItems.filter((x) => x.id !== product.id);
			setcartItems(newCartItem);
		} else {
			const newCartItem = cartItems.map((x) =>
				x.id === product.id ? { ...itemExists, qty: itemExists.qty - 1 } : x
			);
			setcartItems(newCartItem);
		}
	};

  const onOrder = () =>{
    // const itemExists = cartItems.find((x) => x.id === product.id);
    // if(cartItems === 0){
    //   setcartItems(null);
    // }
    setcartItems([]);
  }

  useEffect(() => {
    
  }, [])
  

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Special
								cartItems={cartItems}
								products={products}
								countCartItems={cartItems.length}
								onAdd={onAdd}
								onRemove={onRemove}
							/>
						}></Route>
					<Route path="/desserts" element={<Desserts />}></Route>
          <Route path="/store" element={<Store />}></Route>
					<Route path="/beverages" element={<Beverages />}></Route>
					<Route
						path="/food"
						element={
							<Food
								cartItems={cartItems}
								products={products}
								countCartItems={cartItems.length}
								onAdd={onAdd}
								onRemove={onRemove}
							/>
						}></Route>
					<Route
						path="/cart"
						element={
							<Cart cartItems={cartItems} onOrder = {onOrder} onAdd={onAdd} onRemove={onRemove} />
						}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
