import { React, useState, useEffect } from "react";
import Item from "../Item/Item";
import { useCart } from "../../cartContext/cartContext";
function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((r) => r.json())
      .then((products) => {
        setLoading(true);
        setProducts(products);
        setLoading(false);
      });
  }, []);

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
