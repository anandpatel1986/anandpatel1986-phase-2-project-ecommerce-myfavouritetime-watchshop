import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../cartContext/cartContext";

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const { addToCart } = useCart();
  useEffect(() => {
    fetch(`http://localhost:3333/products/${productId}`)
      .then((r) => r.json())
      .then((product) => {
        setLoading(true);
        setProduct(product);
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="container">
      {loading ? (
        <div className={"loader"}></div>
      ) : (
        <div className="productDetails">
          <img src="product.image" alt="" />
          <div className="info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="addToCart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
