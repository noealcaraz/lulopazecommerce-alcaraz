import { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartContextProvider = ({children}) => {
  const [cart, setCart ] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
    
  const addItemToCart = (newItem) => {
    const isItemInCart = cart.some((item) => item.id === newItem.id);
    if (!isItemInCart) {
      [setCart((prevCart) => [...prevCart, newItem])]
      alert('Producto añadido al carrito con éxito');
    } else {
      alert ('El producto ya existe en el carrito')      
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
};

export default ShoppingCartContextProvider;