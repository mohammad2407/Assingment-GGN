import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import './products.css'
import axios from 'axios';
import Loading from '../Loader/Loading';
import { Category } from '@mui/icons-material';
const ImageCard = styled.div`
width:100%;
height:160px;
background-image: url(${props => props.img});
background-size : 35% 110px;
background-repeat : no-repeat;
background-position:center;
border-bottom: 1px solid rgb(223, 217, 217);

@media(max-width:525px){
    background-size: 30% 130px
}


`

const Card = styled.div`
width:60%;
margin:auto;
height:350px;
margin-bottom:60px;
background:#fff;
box-shadow: 2px 3px 4px 2px rgb(223, 217, 217);
border: 1px solid rgb(223, 217, 217);

@media(max-width:757px){
    width:65%;
    height:350px;
};

@media(max-width:525px){
    width:70%;
    height:400px;
}

`
const Title = styled.header`
margin-top:25px;
text-align:left;
height:22px;
color: #444040;
font-weight:600;
overflow:hidden;
font-size:14px;
margin-left:10px;
margin-bottom:15px;

 p {
    color:#4bc5bf;
};
@media(max-width: 525px){
    height:27px;
    margin-bottom:40px;
    overflow: visible;
}
`
const RatingColor = styled.div`
 color:${props => (props.rating) >= 3.6 ? '#63d616' : ((props.rating) < 3.6 && (props.rating) > 2.5) ? '#d6a916' : '#d65316'}

`
export const Add = styled.div`
min-height: 30px;
min-width:10%;
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
};

@media (max-width: 1024px) {
    margin-top:-20px;
    margin-left:40px;
    font-size:11px;
  };

  @media(max-width: 757px){
    font-size:15px;
    min-height:30px;
    margin-left:8%;
    min-width: 15%;
  };

    @media(max-width:525px){
        min-width:35%;
        margin-left:17%;
    }

`

const Description = styled.header`
height: 70px;
width:90%;
padding-left:3%;

@media(max-width:525px){
    height:70px;
        font-size:17px;
    
};
p {
    font-size : 14px;
    font-family: Arial, Helvetica, sans-serif;
    color:#8b8b8b;
    margin-bottom:6px;
    padding:0;
}
`

export const ProducComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log(products)

    const addtoCart = (product) => {

        const payload = {
            ...product,
            value: 1,
        }

        axios.post("http://localhost:3002/cart", payload)

    }

    const renderedList = products.map((product) => {
        const { image, title, price, category, rating, id } = product
        return (

            <Card className='card'>
                <ImageCard img={image}>
                </ImageCard>
                <Add className="addto-Cart" onClick={() => addtoCart(product)}>
                    Add To Cart
                </Add>
                <Title>
                    {title}
                </Title>
                <Description>
                    <p> Price: ${price} </p>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly size='small' color='#FFC315' ></Rating>

                    </Stack>
                    <RatingColor rating={rating.rate}>
                        {rating.rate}
                    </RatingColor>

                    <p>Reviews: <span>{rating.count}</span></p>
                    <p>Category: <span>{category}</span></p>

                </Description>
            </Card>
        )

    })

    if (products.length > 0) {
        return (

            <>{renderedList}</>
        )
    }
    else {
        return (

            <Loader>

                <div className='loader'></div>
            </Loader>

        )
    }


}

const Loader = styled.div`
width:80%;
margin-left:190px;

@media(max-width:727px){
    width: 40%;
    margin-left:20px;
};

@media(max-width:525px){
    width:30%;
    margin-left:30px
};
`
