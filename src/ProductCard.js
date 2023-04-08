import React from "react";

function ProductCard({product}) {
    const {name, image, price} = product

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
      <button className="primary">Not My Favorite</button>
    </li>
  );
}

export default ProductCard;
