import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import './products.css'
import axios from 'axios';
const ImageCard = styled.div`
width:100%;
height:160px;
background-image: url(${props => props.img});
background-size : 120px 100%;
background-repeat : no-repeat;
background-position:center;
border-bottom: 1px solid rgb(223, 217, 217)


`

const Card = styled.div`
width:60%;
margin:auto;
height:300px;
margin-bottom:60px;
box-shadow: 2px 3px 4px 2px rgb(223, 217, 217)
`
const Title = styled.header`
margin-top:15px;
text-align:left;
height:22px;
overflow:hidden;
color: #444040;
font-weight:600;
font-size:14px;
margin-left:10px;

 p {
    color:#4bc5bf;
}
`

export const Add = styled.div`
height: 30px;
width:10%;
color:#fff;
font-size:13px;
text-align:center;
padding:6px 3px 0px;
margin: 65px;
background:rgb(173, 171, 171);
margin-top:-20px;
position:absolute;
border-radius:5px;
box-shadow:1px 3px 5px rgb(192, 190, 190);

&:hover{
    cursor:pointer;
}

`

const Description = styled.header`
height: 70px;
width:100%;
padding:1%;

p {
    font-size : 14px;
    font-family: Arial, Helvetica, sans-serif;
    color:#8b8b8b;
}
`
export const ProducComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log(products)

    const addtoCart = (product) =>{

        const payload = {
            ...product,
            value : 1,
        }
      
        axios.post("http://localhost:3002/cart",payload)

    }
   
    const renderedList = products.map((product) => {
        const { image, title, price, description, rating,id } = product
        return (
            <Card className='card'>
                <ImageCard img={image}>
                </ImageCard>
                <Add className="addto-Cart" onClick={() =>addtoCart(product)}>
                    Add To Cart
                </Add>
                <Title>
                    {title}
                </Title>
                <Description>
                    <p>${price} </p>
                    <Stack spacing={1} >
                        <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly size='small' color='#FFC315' />
                    </Stack>
                        <p>Reviews: <span>{rating.count}</span></p>
                   
                </Description>
            </Card>
        )

    })

    if(products.length > 0){
    return (
       
        <>{renderedList}</>
    )
    }
    else {
        return (
            <div>Is Loading...</div>
        )
    }


}
