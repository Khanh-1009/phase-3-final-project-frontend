import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand({brands}){
    const [currentBrand, setCurrentBrand] = useState({products: []})
    const params = useParams()
    const brandId = parseInt(params.id)

    useEffect(() => {
        if (brands.length > 0){
            const chosenBrand = brands.find(( {id}) => id === brandId)
            setCurrentBrand(chosenBrand)
        }
    }, [brands])

    console.log(currentBrand)


    // function handleAddProduct(newProduct){
    //     setProducts([...products, newProduct])
    // }

    // function handleDeleteProduct(removeProduct){
    //     const updateAfterRemove = products.filter((product) => product.id !== removeProduct.id)
    //     setProducts(updateAfterRemove)
    // }
    

    return(
        <main>
            {/* <NewProductForm onAddProduct={handleAddProduct}/> */}
            <h2>Products from :</h2>
            <hr />
            <ul className='cards'>
            {currentBrand.products.map((product) => (
                <ProductCard key={product.id} product={product} 
                brandName={currentBrand.name}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand