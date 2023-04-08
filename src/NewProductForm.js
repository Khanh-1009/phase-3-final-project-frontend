import React from "react";

function NewProductForm() {

  return (
    <div className="new-product-form">
      <h2>Product That You Love</h2>
      <form>
        <input type="text" name="name" placeholder="Item name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" placeholder="Price" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default NewProductForm;
