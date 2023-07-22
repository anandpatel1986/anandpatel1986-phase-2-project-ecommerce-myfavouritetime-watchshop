import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ data, addToCart }) {
  const { id, name, image, price } = data;
  return (
    <div className="card">
      <img src={image} alt="" />
      <Link to={`product/${id}`} className="itemName">
        {name}
      </Link>
      <div className="flex">
        <span className="price">$ {price}</span>
        <button className="addToCart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
