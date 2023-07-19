import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Products />
      <Product />
      <Cart />
    </>
  );
}

export default App;
