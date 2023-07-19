import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const productId = useParams();

  return <div>Product</div>;
}

export default Product;
