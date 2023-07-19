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
const useCart = () => useContext(CartContext);

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
  const increaseQuantity = (productId) => {
    const copy = cart.slice();
    const productIndex = copy.findIndex((item) => item.product.id === productId);
    if (productIndex !== -1) {
      copy[productIndex].quantity += 1;
      setCart(copy);
    }
  };

  const decreaseQuantity = (productId) => {
    const copy = cart.slice();
    const productIndex = copy.findIndex((item) => item.product.id === productId);
    if (productIndex !== -1 && copy[productIndex].quantity > 1) {
      copy[productIndex].quantity -= 1;
      setCart(copy);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };

// useContext in children component of App
