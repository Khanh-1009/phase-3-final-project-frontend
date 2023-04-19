import React, {useState} from "react";
import { useParams } from "react-router-dom";

function NewProductForm({onAddProduct}) {
  const [productName, setProductName] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productPrice, setProductPrice] = useState("")
  
  const params = useParams()

  function handleProductNameChange(e){
    setProductName(e.target.value)
  }

  function handleProductImageChange(e){
    setProductImage(e.target.value)
  }

  function handleProductPriceChange(e){
    setProductPrice(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: productName,
        image: productImage,
        price: productPrice,
        brand_id: params.id
      }),
    })
    .then(res => res.json())
    .then(newProduct => {
      onAddProduct(newProduct)
      setProductName("")
      setProductImage("")
      setProductPrice("")
    })
  }

  return (
    <div className="new-product-form">
      <h2>Product That You Desire</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Item name" onChange={handleProductNameChange} value={productName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleProductImageChange} value={productImage}/>
        <input type="text" name="price" placeholder="Price" onChange={handleProductPriceChange} value={productPrice}/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default NewProductForm;
