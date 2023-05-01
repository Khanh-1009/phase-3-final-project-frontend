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
        const filteredBrands = brands.map(brand => brand.id === currentBrand.brand_id ? currentBrand : brand)
        // const filteredBrands = brands.map(brand => {
        //     if (brand.id === currentBrand.brand_id) {
        //         return currentBrand
        //     } else {
        //         return brand
        //     }
        // })
        // const revisedBrandsWithNewProduct = [...filteredBrands, currentBrand]
        setBrands(filteredBrands)
        // setCurrentBrand(currentBrand)
    }

    function handleDeleteProduct(removeProduct){
        const updateAfterRemove = currentBrand.products.filter((product) => product.id !== removeProduct.id)
        currentBrand.products = updateAfterRemove
        const filteredBrands = brands.filter(brand => brand.id !== removeProduct.brand_id)
        const revisedBrandsAfterRemoveProduct = [...filteredBrands, currentBrand]
        setBrands(revisedBrandsAfterRemoveProduct)
        // setCurrentBrand(currentBrand)
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
        const filteredBrands = brands.filter(brand => brand.id !== updatedPrice.brand_id)
        const revisedBrandsAfterEditPrice = [...filteredBrands, currentBrand]
        setBrands(revisedBrandsAfterEditPrice)
        // setCurrentBrand(currentBrand)
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