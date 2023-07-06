import { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
  return (
    <CartContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
};

export default ShoppingCartContextProvider;