import React, { useEffect,useState } from 'react'
import { cartProducts } from '../Redux/Actions/action';
import axios from 'axios'
import styled from "styled-components"
import { useDispatch} from 'react-redux'
import { CartComponent } from './CartComponent';


const CartContainer = styled.div`
   width: 70%;
   position : absolute;
   top: 100px;
   display:flex;
   flex-direction : column;
   margin:auto;
   margin-left: 200px ;
   padding: 20px;
   border: 1px solid #acaaa9
   
   
`

export const Cart = () => {
  // const cartProducts = useSelector((state) => state.allProducts.cart)
  // const {cartState, setCartState} = useState(false)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
      const response = await axios
      .get("http://localhost:3002/cart")
      .catch((err) => {console.log("err",err)});
      dispatch(cartProducts( response.data))
      console.log(response.data)
  }
  const deleteCartItem = (cartItem) => {
    axios.delete(`http://localhost:3002/cart/${cartItem.id}`, {
      headers: {
        "x-access-token": "token-value",
      },
    })
    
      window.location.reload(false)
  }
 

  useEffect (() =>{
    fetchProducts()
  
  }, [])


  return (
    <CartContainer>
      <CartComponent deleteCartItem = {deleteCartItem} cartState  />
    </CartContainer>
  )

}
