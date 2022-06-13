import React from 'react'
import { Route, Routes } from 'react-router'
import { Cart } from '../Components/Cart'
// import { Header } from '../Components/Header'
import { ProductList } from '../Components/ProductList'
import { SingleProduct } from '../Components/SingleProduct'
import { WishList } from '../Components/Wishlist'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<ProductList />}></Route>
            <Route path = '/cart' element = {<Cart />} ></Route>
            <Route path='/Products/:productid' element = {<SingleProduct />} />
            <Route path='/wishlist' element = {<WishList />} />
        </Routes> 
      
    </div>
  )
}

export default Routing
