import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand({brands}){
    // const [brand, setBrand] = useState({products: []})

    const [productFormFlag, setProductFromFlag] = useState(false)
    //console.log(brand)

    const params = useParams()
    const id = params.id
    console.log(id)
    const brand = brands.find(brand => brand.id === id)


    // useEffect(() => {
    //     fetch(`http://localhost:9292/brands/${params.id}`)
    //     .then(res => res.json())
    //     .then(data => setBrand(data))
    // }, [])

    // function handleProductSubmit(newProduct){
    //     setBrand([...brand.products, newProduct])
    // }
    // //console.log(brand, "brand")
    // function handleClickDeleteItem(deletedItem){
    //     const updatedItemList = brand.products.filter((item) => item.id !== deletedItem.id)
    //     setBrand(updatedItemList)
    // }

    // function handleChangePriceItem(newPrice){
    //     const changePrice = brand.products.map((product) => {
    //         if (product.id === newPrice.id){
    //             return newPrice
    //         } else {
    //             return product
    //         }
    //     })
    //     setBrand(changePrice)
    // }

    return (
        <main>
            {/* <NewProductForm onProductSubmitForm={handleProductSubmit}/> */}
            {/* <h2>Products from {brand.name}:</h2> */}
            <hr />
            <ul className='cards'>
            {brand.products.map((product) => (
                <ProductCard key={product.id} product={product} brand={brand.name}
                // onDeleteClick={handleClickDeleteItem} 
                // onChangeNewPrice={handleChangePriceItem}
                />
            ))}
            </ul>
        </main>
    )
}

export default Brand