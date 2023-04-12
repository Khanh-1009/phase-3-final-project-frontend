import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand(){
    const [brand, setBrand] = useState({
        products: []
    })

    console.log(brand.products)
    const [productFormFlag, setProductFromFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/brands/${params.id}`)
        .then(res => res.json())
        .then(data => setBrand(data))
    }, [])

    function handleProductSubmit(newProduct){
        setBrand([...brand.products, newProduct])
    }

    function handleClickDeleteItem(deletedItem){
        const updatedItemList = brand.products.filter((item) => item.id !== deletedItem.id)
        setBrand(updatedItemList)
    }

    return (
        <main>
            <NewProductForm onProductSubmitForm={handleProductSubmit}/>
            <h2>Products from {brand.name}:</h2>
            <hr />
            <ul className='cards'>
            {brand.products.map((product) => (
                <ProductCard key={product.id} product={product}
                onDeleteClick={handleClickDeleteItem}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand