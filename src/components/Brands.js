import React, { useState } from "react"
import BrandLink from "./BrandLink"


function Brands({brands, onAddNewBrand}){
    const [newBrand, setNewBrand] = useState("")

    function handleChangeNewBrand(e){
        setNewBrand(e.target.value)
    }

    function handleSubmitNewBrand(e){
        e.preventDefault()
        fetch("http://localhost:9292/brands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newBrand
            })
        })
        .then((res) => res.json())
        .then(newBrand => {
            onAddNewBrand(newBrand)
            setNewBrand("")
        })
    }

    return (
        <div className="App">
            <div className="new-product-form">
                <h2>Add New Brand:</h2>
                <form onSubmit={handleSubmitNewBrand}>
                    <input type="text" name="brand" placeholder="Brand Name" 
                    onChange={handleChangeNewBrand}
                    value={newBrand}/>
                    <button type="submit">Add Brand</button>
                </form>
            </div>
            {brands.map((brand) => (
                <BrandLink key={brand.id} brand={brand} />
            ))}
        </div>
    )
}

export default Brands;