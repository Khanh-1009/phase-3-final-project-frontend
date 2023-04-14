import React, {useState} from "react";
import EditPrice from "./EditPrice";
import { useParams } from "react-router-dom";

function ProductCard({product, brand, onDeleteClick, onChangeNewPrice}) {
  const {name, image, price, id} = product
  // const [isEditing, setIsEditing] = useState(false);


  // function handleDeleteItem(){
  //   fetch(`http://localhost:9292/products/${params.id}`, {
  //     method: "DELETE",
  //   })
  //   .then(res => res.json())
  //   .then(() => onDeleteClick(product))
  // }

  // function handleUpdatedPrice(updatedPrice){
  //   setIsEditing(false)
  //   onChangeNewPrice(updatedPrice)
  // }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{brand} - {name}</h4>
      {isEditing ? <EditPrice id={id} price={price} onUpdatePrice={handleUpdatedPrice}/> : 
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
      <button className="primary">Not My Favorite</button>
    </li>
  );
}

export default ProductCard;
