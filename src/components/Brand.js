import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand(){
    const [brand, setBrand] = useState([])
    const [brandName, setBrandName] = useState("")
    const params = useParams()
    const brandId = parseInt(params.id)


    useEffect(() => {
        fetch(`http://localhost:9292/brands/${brandId}`)
        .then(res => res.json())
        .then(data => {
            setBrandName(data.name)
            setBrand(data.products)})
    }, [])
    

    return(
        <main>
            <NewProductForm />
            <h2>Products from {brandName}:</h2>
            <hr />
            <ul className='cards'>
            {brand.map((product) => (
                <ProductCard key={product.id} product={product} brandName={brandName}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand