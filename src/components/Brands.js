import React, { useState, useEffect } from "react"
import BrandLink from "./BrandLink"


function Brands({brands}){
    const [brandList, setBrandList] = useState([])
    const [newBrand, setNewBrand] = useState("")
    console.log(brandList)

    useEffect(() => {
        fetch("http://localhost:9292/brands")
        .then(res => res.json())
        .then(data => setBrandList(data))
    }, [])

    function handleAddNewBrand(newBrand){
        setBrandList([...brandList, newBrand])
    }

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
            handleAddNewBrand(newBrand)
            setNewBrand("")
        })
    }

    return (
        <div className="App">
            <div className="new-product-form">
                <h2>Brands You Love To Have</h2>
                <form onSubmit={handleSubmitNewBrand}>
                    <input type="text" name="brand" placeholder="Brand Name" 
                    onChange={handleChangeNewBrand}
                    value={newBrand}/>
                    <button type="submit">Add Brand</button>
                </form>
            </div>
            {brandList.map((brand) => (
                <BrandLink key={brand.id} brand={brand} />
            ))}
        </div>
    )
}

export default Brands;