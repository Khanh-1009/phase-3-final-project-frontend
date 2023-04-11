import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import NewProductForm from './NewProductForm'

function ProductPage() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/products")
        .then(res => res.json())
        .then(data => setProductList(data))
    }, [])

    function handleProductSubmit(newProduct){
        setProductList([...productList, newProduct])
    }

    function handleClickDeleteItem(deletedItem){
        const updatedItemList = productList.filter((item) => item.id !== deletedItem.id)
        setProductList(updatedItemList)
    }

    return (
        <main>
            <NewProductForm onProductSubmitForm={handleProductSubmit}/>
            <ul className='cards'>
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} onDeleteClick={handleClickDeleteItem}/>
                ))}
            </ul>
        </main>
    )
}

export default ProductPage