import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const ShoppingCartContextProvider = ({children}) => {
  const [cart, setCart ] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const mensajeOk = () => {
    toast.success('Producto añadido al carrito!', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const mensajeNo = () => {
    toast.error('El producto ya existe en el carrito.', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    
  const addItemToCart = (newItem) => {
    const isItemInCart = cart.some((item) => item.id === newItem.id);
    if (!isItemInCart) {
      [setCart((prevCart) => [...prevCart, newItem])]
      mensajeOk();
    } else {
      mensajeNo();      
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
};

export default ShoppingCartContextProvider;