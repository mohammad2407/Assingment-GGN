export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SELECTED_PRODUCT = 'SELECTED_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SET_CART_PRODUCTS = "SET_CART_PRODUCTS"
export const CHANGE_QUANTITY  = "CHANGE_QUANTITY"
export const CART_STATUS  = "CART_STATUS"
export const ADDTO_WISHLIST = "ADDTO_WISHLIST"
export const setProducts =(products) =>{
    return {
        type : SET_PRODUCTS,
        payload:products
    }
} 

export const slectedProduct =(product) =>{
    return {
        type :SELECTED_PRODUCT,
        payload:product
    }
} 

export const cartProducts =(cart_Products) =>{
    return {
        type :SET_CART_PRODUCTS,
        payload:cart_Products
    }
} 

export const changeQuantity =(quantity) =>{
    return {
        type :CHANGE_QUANTITY,
        payload:quantity
    }
} 

export const setCartStatus =(status) =>{
    return {
        type :CART_STATUS,
        payload:status
    }
} 

export const setWishlist = (wishlist) =>{
    return{
        type: ADDTO_WISHLIST,
        payload :wishlist
    }
}


