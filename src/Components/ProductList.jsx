import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProducComponent } from './ProducComponent'
import axios from 'axios'
import { setProducts,cartProducts    } from '../Redux/Actions/action'
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
        <div style={{display:'grid', gridTemplateColumns : "repeat(3,1fr)", width:'100%' , margin:"auto", marginTop:"130px"}}>

            <ProducComponent />

        </div>
    )
}
