import React from "react";
import Item from "../Item/Item";
import { useCart } from "../../cartContext/cartContext";
function Products({ loading, products }) {
  const { addToCart } = useCart();

  return (
    <div className="products">
      {loading ? (
        <div className="loader" />
      ) : (
        products.map((product) => {
          return <Item key={product.id} data={product} addToCart={() => addToCart(product)} />;
        })
      )}
    </div>
  );
}

export default Products;
