import React, { useEffect,useState } from 'react'
import { cartProducts, setWishlist } from '../Redux/Actions/action';
import axios from 'axios'
import styled from "styled-components"
import { useDispatch, useSelector} from 'react-redux'
import { WishComponent } from './WishComponent';

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

export const WishList = () => {
  const wishProducts = useSelector((state) => state.allProducts.wishlist)
  const [cartState, setCartState] = useState(false)
  
  const dispatch = useDispatch()
  const fetchProducts = async () => {
      const response = await axios
      .get("http://localhost:3009/wishlist")
      .catch((err) => {console.log("err",err)});
      dispatch(setWishlist( response.data))
      console.log(response.data)
  }
  
  const deleteWishItem = (wishItem) => {
    console.log(wishItem)
    
      axios.delete(`http://localhost:3009/wishlist/${wishItem.id}`, {
        headers: {
          "x-access-token": "token-value",
        },
      })
    
      setTimeout(() => fetchProducts(),100)
      setTimeout(() => setCartState(true),100)

  }

  const AddToCart = (wishItem) =>{
    const payload = {
      ...wishItem,
      value:1,
    }
    axios.post(`http://localhost:3009/cart`, payload)
    setTimeout(() => deleteWishItem(wishItem),100)
  }
 

  useEffect (() =>{
    fetchProducts()
  }, [])


  return (
    <CartContainer>
      <WishComponent deleteWishItem = {deleteWishItem} cartState = {cartState} AddtoCart = {AddToCart} />
    </CartContainer>
  )

}
