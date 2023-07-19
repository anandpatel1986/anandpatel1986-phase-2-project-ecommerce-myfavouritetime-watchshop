import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/products/${productId}`)
      .then((r) => r.json())
      .then((product) => {
        setLoading(true);
        setProduct(product);
        setLoading(false);
      });
  }, [productId]);

  return <div>Product</div>;
}

export default Product;
