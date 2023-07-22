import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddNewProduct.css";

function AddNewProduct({ products, setProducts }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      description: desc,
      image: image,
      price: parseFloat(price),
    };

    fetch("http://localhost:3333/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        history.push("/");
      });
  }

  return (
    <form className="addProduct" onSubmit={handleSubmit}>
      <label htmlFor="pName">Product Name: </label>
      <input type="text" id="pName" name="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="pDesc">Description: </label>
      <input type="text" id="pDesc" name="name" value={desc} onChange={(e) => setDesc(e.target.value)} />

      <label htmlFor="pURL">Image URL: </label>
      <input type="text" id="pURL" name="name" value={image} onChange={(e) => setImage(e.target.value)} />

      <label htmlFor="pPrice">Price: </label>
      <input type="text" id="pPrice" name="name" value={price} onChange={(e) => setPrice(e.target.value)} />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddNewProduct;
