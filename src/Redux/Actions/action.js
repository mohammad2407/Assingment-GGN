export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SELECTED_PRODUCT = 'SELECTED_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SET_CART_PRODUCTS = "SET_CART_PRODUCTS"

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