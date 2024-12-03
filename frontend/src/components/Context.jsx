import React, {useState, createContext} from "react";

export const CartContext = createContext();

const Context = (props) => {
    const [cartItems, setCartItems] = React.useState([]);
    
    const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj])
  };

  const value = {
    cartItems,
    onAddToCart
  }
    return (
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
        
        
    );
}
export default Context;