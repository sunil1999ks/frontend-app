import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import wishlistReducer from './wishlistReducer'
import cartReducer from './cartReducer'
import currentProduct from './currentProduct'

const rootReducer = combineReducers({
    user:userReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    currentProduct:currentProduct
})

export default rootReducer
