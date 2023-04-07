import React from 'react'
import { Link } from 'react-router-dom'

function BrandLink({brand}){

    return(
        <div>
            <Link to={`http://localhost:9292/brands/${brand.id}`}>
                <h3>{brand.name}</h3>
            </Link>
        </div>
    )
}

export default BrandLink