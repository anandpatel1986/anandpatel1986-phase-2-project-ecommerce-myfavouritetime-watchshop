import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <ProductDetail />
      <Cart />
    </div>
  );
}

export default App;
