import axios from 'axios'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Add } from './ProducComponent'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading from '../Loader/Loading'
const CartCard = styled.div`
  width: 90%;
  height: 150px;
  display:flex;
  flex-direction:row;
  margin-bottom:15px;
  padding-left:12px;
  background:#fff;
  box-shadow:1px 2px 5px 2px #d4d1d1;

  h1{
    color:#c3ccc;
  };

  @media(max-width:1024px){
    width:90%;
    height:170px;
    h1{
      font-size:24px;
    }
  }

`

const ImageCard = styled.div`
width:15%;
height:130px;
background-image: url(${props => props.img});
background-size : 100% 130px;
background-repeat : no-repeat;
background-position:center;
margin-top:10px;
margin-Right:30px;
float:left;


`

const BuyNow = styled(Add)`
  margin-top:110px;
   width: 50%;
   height:40px;
   background:#c3c5c5;
   outline : none;
   text-decoration:none;
   color:#fff;
   padding:13px 0px 0px;
   font-weight:600;
   font-size:16px;
   & :hover{
     cursor:pointer;
   };

   @media(max-width:1024px){
     width:30%;
   };

   @media(max-width:768px){
    margin-top:110px;
    width: 30%;
   };
`
const DescCard = styled.div`
width: 85%;
background: #c5cecb;
padding:0% 0% 0% 1%
`

const Title = styled.header`
margin-top:10px;
text-align:left;
height:22px;
overflow:hidden;
color: #444040;
font-weight:600;
font-size:14px;
margin-bottom:10px;

`
const DelAdd = styled.button`
outline:none;
position:relative;
padding:4px;
height:30px;
border:none;
border-radius:5px;
font-size:13px;
width:90%;
margin-bottom:10px;
margin-right:30px;
background:grey;
color:#fff;

`
const Btnholder = styled.div`
width:30%;
margin-top:-20px;
display:flex;
flex-direction:column;
float:right;

`

const Divcon = styled.span`
margin:-6px 0 0 60%;
`
const Divtxt = styled.div`
 margin: -22px 10% 0;
 width:fit-content;
`

export const WishComponent = ( {deleteWishItem, cartState, AddtoCart}) => {
  const wishProducts = useSelector((state) => state.allProducts.wishlist)
  console.log(wishProducts)
  let sum = 0;
  wishProducts.forEach(element => {
    sum = sum + (element.value * Math.floor(element.price))
    console.log(sum)
  });




const renderedList = wishProducts.map((wishItem) => {
  const { title, id, price, description, rating, value, image } = wishItem
  return (
    <CartCard >
      <ImageCard img={image}>
      </ImageCard>
      <DescCard>
        <Title>
          {title}
        </Title>

        <Btnholder >
          <DelAdd onClick={() => (deleteWishItem(wishItem))} className="delAdd" >
            <Divcon>
              <DeleteIcon />
            </Divcon>
            <Divtxt >Remove</Divtxt>

          </DelAdd>
          <DelAdd onClick={() => AddtoCart(wishItem)}>
            <Divcon>
              < ShoppingCartIcon/>
            </Divcon>
            <Divtxt>
              Add to Cart
            </Divtxt>

          </DelAdd>
        </Btnholder>

        <Title>Price: $ {parseInt(value) * parseInt(price)}</Title>
      </DescCard>

    </CartCard>
  )
})

if (wishProducts.length > 0) {
  return (
    <>
      <h3> WishList Items:({wishProducts.length})</h3>
      {renderedList}
      <h2>Total :( ${sum} )</h2>
    </>

  )
}
else if (cartState == false && wishProducts.length > 0) {
  return (
    <Loading></Loading>
  )
}
else {
  return (
    <div>
      <CartCard style={{ display: "flex", flexDirection: "column" }}>
        <h1>Nothing in the Wish list</h1>

        <Link to={"/"}>
          <BuyNow className='buyNow'>
            Shop Now
          </BuyNow>
        </Link>
      </CartCard>
    </div>
  )
}

}

