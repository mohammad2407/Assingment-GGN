import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProducComponent } from './ProducComponent'
import axios from 'axios'
import { setProducts,cartProducts    } from '../Redux/Actions/action'
import styled from 'styled-components'

export const ProductList = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {console.log("err",err)});
        dispatch(setProducts( response.data))
    }

   
  

    useEffect(() => {
        fetchProducts()
       
    },[])


    return (
        <div style={{  width:'100%' , margin:"auto", marginTop:"130px"}}>
            <h1>Products</h1>
            <ProductContainer>
            <ProducComponent style = {{border:"1px solid green"}}/>
            </ProductContainer>

        </div>
    )
}

const ProductContainer = styled.div`
    width:100%;
    display:grid;
    grid-template-columns : repeat(3, 1fr);


    @media (max-width: 768px) {
        grid-template-columns:repeat(2, 2fr);
      };

      @media(max-width: 525px){
        display:flex;
        flex-direction:column;
      }

`