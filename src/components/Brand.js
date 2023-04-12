import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand(){
    const [brand, setBrand] = useState({
        products: []
    })
    const [productFormFlag, setProductFromFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/brands/${params.id}`)
        .then(res => res.json())
        .then(data => setBrand(data))
    }, [])

    

    return (
        <main>
            <NewProductForm />
            <h2>Products from {brand.name}: </h2>
            <hr />
            <ul className='cards'>
            {brand.products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand