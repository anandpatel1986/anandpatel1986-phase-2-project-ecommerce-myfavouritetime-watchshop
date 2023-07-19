import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function AddNewProduct({ products, setProducts }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      description: desc,
      image: image,
      price: price,
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
      <label>
        Product Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description: <input type="text" name="name" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <br />
      <label>
        Image URL: <input type="text" name="name" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Price: <input type="text" name="name" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddNewProduct;
