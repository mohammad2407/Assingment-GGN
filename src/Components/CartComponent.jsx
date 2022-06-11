import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Add } from './ProducComponent'
const CartCard = styled.div`
  width: 80%;
  height: 150px;
  display:flex;
  flex-direction:row;
  margin-bottom:15px;
  padding-left:12px;
  background-color:#fff;
  box-shadow:1px 2px 5px 2px #d4d1d1;

  h1{
    color:#c3ccc;
  }
`

const ImageCard = styled.div`
width:17%;
height:130px;
background-image: url(${props => props.img});
background-size : 100% 130px;
background-repeat : no-repeat;
background-position:center;
margin-top:10px;
margin-Right:30px;
float:left;


`
const Select = styled.select`
height:30px;
width:100px;
outline:none;
border:none;
padding:1%;
border-radius: 4px;
background:#89aca0;
color:#fff;


`
const BuyNow = styled(Add)`
  margin-top:110px;
   width: 50%;
   height:40px;
   background:#c3c5c5;
   outline : none;
   text-decoration:none;
   color:#fff;

   & :hover{
     cursor:pointer;
   }
`
const DescCard = styled.div`
width: 80%;
height: 150px;
background: #c5cecb;
padding:0% 0% 0% 1%
`

const Title = styled.header`
margin-top:15px;
text-align:left;
color: #444040;
font-weight:600;
font-size:14px;
margin-bottom:10px;

`

export const CartComponent = ({deleteCartItem, cartState}) => {
  const cartProducts = useSelector((state) => state.allProducts.cart)

console.log(cartState)
  
 
  const renderedCart =   cartProducts.map((cartItem) => {
    const { title, id, price, description, rating, count, image } = cartItem
    return (
      <CartCard>
        <ImageCard img={image}>
        </ImageCard>
        <DescCard>
          <Title>
            {title}
          </Title>
          <div style={{ padding: "1%", border: "1px solid #c5cecb", width: "fit-content" }}>
            <span style={{ marginRight: "10px", fontSize: '15px', color: '#6d6c6b' }}>Buy More:</span>
            <Select>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </div>

          <button onClick={() => deleteCartItem(cartItem)} >Delete</button>
          <button>Add to Wish List</button>
        </DescCard>

      </CartCard>
    )
  })

if(cartProducts.length > 0){
  return (
    <>
      <h3> Cart Items:({cartProducts.length})</h3>
      {renderedCart}</>
  )
}
else if( cartState == false){
  return (
    <div>Is Loading....</div>
  )
}
else {return (
   <div>
    <CartCard style={{display:"flex", flexDirection:"column"}}>
      <h1>You haven't shoppped anything</h1>

      <Link to = {"/"}>
      <BuyNow className='buyNow'>
        Shop Now
      </BuyNow>
        </Link>
    </CartCard>
   </div>
)
}
}
