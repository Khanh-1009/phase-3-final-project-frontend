import React, { useState, useEffect } from "react"
import BrandLink from "./BrandLink"


function Brands(){
    const [brandList, setBrandList] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/brands")
        .then(res => res.json())
        .then(data => setBrandList(data))
    }, [])

    return (
        <div className="App">
        <div className="new-product-form">
            <h2>Brands You Love To Have</h2>
            <form>
                <input type="text" name="brand" placeholder="Brand Name" />
                <button type="submit">Add Brand</button>
            </form>
            </div>
            {brandList.map((brand) => (
                <BrandLink key={brand.id} brand={brand}/>
            ))}
        </div>
    )
}

export default Brands;