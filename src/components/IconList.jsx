import React from 'react'
import { Link } from 'react-router-dom'
import  setCurrentProduct  from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux'

const IconList = ({product}) => {


    let dispatch = useDispatch()

    let handleCurrentProduct = ()=>{
        dispatch(setCurrentProduct(product))
    }
    return (
        <div>
            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                    <Link onClick={handleCurrentProduct} to={{pathname:"/details/"}}>
                        <span className="fas fa-expand-arrows-alt"></span>
                    </Link>

                </li>
                <li className="icon mx-3">
                    <Link onClick={() => alert("I am wishlist page")}>
                        <span className="far fa-heart"></span>
                    </Link>

                </li>
                <li className="icon">
                    <Link onClick={() => alert("I am cart page")}>
                        <span className="fas fa-shopping-bag"></span>
                    </Link>

                </li>
            </ul>
        </div>
    )
}

export default IconList
