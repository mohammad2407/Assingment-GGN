import { SELECTED_PRODUCT } from "../Actions/action";
import {SET_PRODUCTS} from "../Actions/action"
import {SET_CART_PRODUCTS} from "../Actions/action"
import {CHANGE_QUANTITY, CART_STATUS} from "../Actions/action"

const initialState = {
    products : [],
    cart : [],
    cartStatus:true,
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

        case CHANGE_QUANTITY:
            let updatedCart = [...state.cart];
            updatedCart.forEach((item) => {
                if(item.id == payload.id){
                    item.value = payload.val
                }
            }
            )

            return {
                ...state,
                cart:updatedCart,
            }
            
            // case CART_STATUS:
            //     if(payload.cartstate == false){

            //     }
            //     return{
            //         ...state,
            //         cartStatus:true,
            //     }
        default :
        return state
    }

}