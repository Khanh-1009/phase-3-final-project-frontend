import React from "react";
import { useParams } from "react-router-dom";

function ProductCard({product, onDeleteClick}) {
  const {name, image, price} = product

  const params = useParams()

  function handleDeleteItem(){
    fetch(`http://localhost:9292/products/${params.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => console.log(product))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <br/>
      <button className="primary" onClick={handleDeleteItem}>Not My Favorite</button>
    </li>
  );
}

export default ProductCard;
