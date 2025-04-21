import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'



const ProductSection = () => {

    let [products, setProducts] = useState([])


 
    let getProducts = ()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }

    useEffect(getProducts, [])


    return (


        <div>
            <div className="container bg-white">

                <div className="row mt-5">
                    {
                        products.map(product=>
                            <ProductItem key={product.id} product={product} />
                        )
                    }

                    
                </div>

            </div>
        </div>
    )
}

export default ProductSection
