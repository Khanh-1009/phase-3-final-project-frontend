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
            {brandList.map((brand) => (
                <BrandLink key={brand.id} brand={brand}/>
            ))}
        </div>
    )
}

export default Brands;