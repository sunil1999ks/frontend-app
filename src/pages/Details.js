import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import "./details.css"


let Details = () => {

    let product = useSelector((state)=>state.currentProduct.product)
    return (
        <div className='container-fluid'>
            <Navbar />

           
            <div className='container'>
                <ProductDetails product={product} />

            </div>





        </div>
    )
}

export default Details
