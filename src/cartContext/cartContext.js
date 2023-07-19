import { createContext, useContext, useState } from "react";

// create context

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

//  context Provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState.cart);

  const cartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.product.id === product.id);
    if (productIndex !== -1) {
      increaseQuantity(product.id);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };
};

// useContext in children component of App
