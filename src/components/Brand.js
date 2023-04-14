import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
// import NewProductForm from "./NewProductForm";

function Brand({brands}){
    const params = useParams()
    const brandId = parseInt(params.id)
    
    const chosenBrand = brands.find(( {id} ) => id === brandId)
    
    console.log(chosenBrand)
    

    return(
        <main>
            <h2>Products from {chosenBrand.name}:</h2>
            <hr />
            <ul className='cards'>
            {chosenBrand.products.map((product) => (
                <ProductCard key={product.id} product={product} brand={chosenBrand.name}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand