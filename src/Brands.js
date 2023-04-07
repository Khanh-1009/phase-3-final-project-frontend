import React, { useState, useEffect } from "react"
import BrandLink from "./BrandLink"


function Brands(){
    const [brandList, setBrandList] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/brands")
        .then(res => res.json())
        .then(data => setBrandList(data))
    })

    return (
        <div>
            {brandList.map((brand) => {
                <BrandLink />
            })}
        </div>
    )
}

export default Brands;