import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NewProductForm from "./NewProductForm";

function Brand({brands, setBrands}){
    const [currentBrand, setCurrentBrand] = useState({products: []})
    const params = useParams()
    const brandId = parseInt(params.id)

    useEffect(() => {
        if (brands.length > 0){
            const chosenBrand = brands.find(( {id}) => id === brandId)
            setCurrentBrand(chosenBrand)
        }
    }, [brands])


    function handleAddProduct(newProduct){
        const addNewProduct = [...currentBrand.products, newProduct]
        currentBrand.products = addNewProduct
        console.log('curr', currentBrand)
        const filteredBrands = brands.filter(brand => brand.id !== newProduct.brand_id)
        const revisedBrandsWithNewProduct = [...filteredBrands, currentBrand]
        setBrands(revisedBrandsWithNewProduct)
        setCurrentBrand(currentBrand)
    }

    function handleDeleteProduct(removeProduct){
        const updateAfterRemove = currentBrand.products.filter((product) => product.id !== removeProduct.id)
        currentBrand.products = updateAfterRemove
        const filteredBrands = brands.filter(brand => brand.id !== removeProduct.brand_id)
        const revisedBrandsAfterRemoveProduct = [...filteredBrands, currentBrand]
        setBrands(revisedBrandsAfterRemoveProduct)
        setCurrentBrand(currentBrand)
    }
    
    return(
        <main>
            <NewProductForm onAddProduct={handleAddProduct}/>
            <h2>Products from {currentBrand.name}:</h2>
            <hr />
            <ul className='cards'>
            {currentBrand.products.map((product) => (
                <ProductCard key={product.id} product={product} 
                brandName={currentBrand.name}
                onDeleteProduct={handleDeleteProduct}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand