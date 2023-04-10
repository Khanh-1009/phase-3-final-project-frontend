import React from "react";

function ProductCard({product, onDeleteClick}) {
  const {name, image, price} = product

  function handleDeleteItem(){
    fetch(`http://localhost:9292/products/${product.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDeleteClick(product))
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
