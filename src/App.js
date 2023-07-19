import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
