import React, {useState} from "react";

function EditPrice({id, price, onEditPrice}) {
    const [editedPrice, setEditedPrice] = useState(price)

    function handleChangeNewPrice(e){
        setEditedPrice(e.target.value)
    }
    
    function handleUpdateNewPrice(e){
        e.preventDefault();
        fetch(`http://localhost:9292/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                price: editedPrice,
            }),
        })
        .then(res => res.json())
        .then(updatedPrice => onEditPrice(updatedPrice))
    }

    return (
        <form className="edit-message" onSubmit={handleUpdateNewPrice}>
          <input
            type="text"
            name="price"
            autoComplete="off"
            value={editedPrice}
            onChange={handleChangeNewPrice}
          />
          <input type="submit" value="Save" />
        </form>
      );

}

export default EditPrice;