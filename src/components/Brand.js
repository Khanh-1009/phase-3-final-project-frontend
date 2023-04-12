import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Brand(){
    const [brand, setBrand] = useState({
        products: []
    })
    const [productFormFlag, setProductFromFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/brands/${params.id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h3>Our Brand Products: </h3>
        </div>
    )

}

export default Brand