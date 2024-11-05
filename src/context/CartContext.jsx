import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = item => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]); // Reset the cart to an empty array
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
