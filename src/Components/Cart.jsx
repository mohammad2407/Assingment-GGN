import React, { useEffect,useState } from 'react'
import axios from 'axios'
import styled from "styled-components"
import { useDispatch, useSelector} from 'react-redux'
import { CartComponent } from './CartComponent';
import { cartProducts } from '../Redux/Actions/action';

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
  const Products = useSelector((state) => state.allProducts.cart)
  const [cartState, setCartState] = useState(false)
  
  const dispatch = useDispatch()
  const fetchProducts = async () => {
      const response = await axios
      .get("http://localhost:3009/cart")
      .catch((err) => {console.log("err",err)});
      dispatch(cartProducts( response.data))
      console.log(response.data)
  }


  const addToWishlist = (cartItem) =>{
    const payload ={
      ...cartItem
    }
    axios.post(`http://localhost:3009/wishlist`, payload).then(() => deleteCartItem(cartItem))
    

  }



  const deleteCartItem = (cartItem) => {
    console.log("delete",cartItem)
    if( Products.length == 1 ){
      alert("This will empty Your cart")
    }
    axios.delete(`http://localhost:3009/cart/${cartItem.id}`, {
      headers: {
        "x-access-token": "token-value",
      },
    })
    if(cartProducts.length > 0){
      setTimeout(() => fetchProducts(),0)
    }
      setTimeout(() => setCartState(true),100)

  }
 

  useEffect (() =>{
    fetchProducts()
  }, [])



  return (
    <CartContainer>
      <CartComponent deleteCartItem = {deleteCartItem} cartState = {cartState} addToWishlist = {addToWishlist}/>
    </CartContainer>
  )

}
