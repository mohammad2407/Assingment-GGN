import { SELECTED_PRODUCT } from "../Actions/action";
import {SET_PRODUCTS} from "../Actions/action"
import {SET_CART_PRODUCTS} from "../Actions/action"
const initialState = {
    products : [],
    cart : []
}
export const productReducer = (state = initialState, {payload,type}) =>{

    console.log("state",state)
    switch (type) {
        case SELECTED_PRODUCT:
        return {...state, ...state.product,payload}
        
        case SET_PRODUCTS:
            return {...state, 
                products : payload
                }
        
        case SET_CART_PRODUCTS:
            console.log(payload)
            return {
                ...state,
                cart:payload
            }
        default :
        return state
    }

}