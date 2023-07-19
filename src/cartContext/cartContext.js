import { createContext, useContext, useState } from "react";

// create context
// wrapping App in context Provider
// useContext in component

const initialState = {
  cart: [],
  cartItemCount: () => 0,
  addToCart: () => null,
  removeFromCart: () => null,
  increaseQuantity: () => null,
  decreaseQuantity: () => null,
};

const CartContext = createContext(initialState);
useCart = () => useContext(CartContext);
