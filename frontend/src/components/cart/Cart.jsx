import './cart.css'
import Header from '../header/Header'
import ExHeader from '../ExHeader/ExHeader'
import Products from '../Product/Product'
import CartItem from '../cartItem/CartItem'
import React, {useContext} from 'react'
import {CartContext} from '../Context'
import Footer from './../footer/Footer'


 const Cart = () => {
    const data = useContext(CartContext);
    console.log('data', data)
    return (
        <>
        <Header />
        <CartItem items={data.cartItems}/>
        
            
           
       
        <Footer />
        </>
    );
}

export default Cart;

