import React, {useState} from "react";
import EditPrice from "./EditPrice";

function ProductCard({product, brandName, onDeleteProduct, onChangeNewPrice}) {
  const {name, image, price, id} = product
  const [isEditing, setIsEditing] = useState(false);


  function handleDeleteItem(){
    fetch(`http://localhost:9292/products/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDeleteProduct(product))
  }

  function handleUpdatedPrice(updatedPrice){
    setIsEditing(false)
    onChangeNewPrice(updatedPrice)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{brandName} - {name}</h4>
      {isEditing ? <EditPrice id={id} price={price} onEditPrice={handleUpdatedPrice}/> : 
        <p>Price: {price} 
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span>
                ✏️
              </span>
          </button> 
        </p>}
      {true ? (
        <button className="primary">Place Order</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <br/>
      <button className="primary" onClick={handleDeleteItem}>Remove</button>
    </li>
  );
}

export default ProductCard;
