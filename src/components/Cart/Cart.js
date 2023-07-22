import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../cartContext/cartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  function cartTotal() {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  return (
    <div className="cartContainer">
      {cart.length >= 1 ? (
        <div className="grid">
          <div className="cartItem">
            <h2>Order Summary</h2>
            {cart.map((item) => (
              <div className="item" key={item.product.id}>
                <img src={item.product.image} alt="" />
                <div className="itemDesc">
                  <Link to={"product/" + item.product.id}>{item.product.name}</Link>
                </div>
                <span className="price">$ {item.product.price * item.quantity}</span>
                <div>
                  <button className="addQty" onClick={() => increaseQuantity(item.product.id)}>
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => decreaseQuantity(item.product.id)}
                    disabled={item.quantity === 1}
                    className="removeQty"
                  >
                    -
                  </button>
                  <div className="remove" onClick={() => removeFromCart(item.product.id)}>
                    Remove
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="payment">
            <h2>Payment Summary</h2>
            <div className="summary">
              <span>Total:</span>
              <span className="price">$ {cartTotal()}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="error">
          <p>&#9432; Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
