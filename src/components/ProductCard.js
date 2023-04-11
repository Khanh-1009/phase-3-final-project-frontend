import React, {useState} from "react";
import EditPrice from "./EditPrice";

function ProductCard({product, onDeleteClick}) {
  const {name, image, price, id} = product
  const [isEditing, setIsEditing] = useState(false);

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
      {isEditing ? <EditPrice id={id} price={price}/> : 
        <p>Price: {price} 
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span>
                ✏️
              </span>
          </button> 
        </p>}
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
