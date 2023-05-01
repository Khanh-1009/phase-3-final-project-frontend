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
        const updatedBrandsAfterAddProduct = brands.map(brand => brand.id === currentBrand.brand_id ? currentBrand : brand)
        setBrands(updatedBrandsAfterAddProduct)
    }

    function handleDeleteProduct(removeProduct){
        const updateAfterRemove = currentBrand.products.filter((product) => product.id !== removeProduct.id)
        currentBrand.products = updateAfterRemove
        const updatedBrandsAfterDeleteProduct = brands.map(brand => brand.id === currentBrand.brand_id ? currentBrand : brand)
        setBrands(updatedBrandsAfterDeleteProduct)
    }

    function handleChangePrice(updatedPrice){
        const updatePriceOfProduct = currentBrand.products.map((product) => {
            if (product.id === updatedPrice.id){
                return updatedPrice
            } else {
                return product
            }
        })
        currentBrand.products = updatePriceOfProduct
        const updateBrandsAfterChangePrice = brands.map(brand => brand.id === currentBrand.brand_id ? currentBrand : brand)
        setBrands(updateBrandsAfterChangePrice)
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
                onDeleteProduct={handleDeleteProduct}
                onChangeNewPrice={handleChangePrice}/>
            ))}
            </ul>
        </main>
    )
}

export default Brand