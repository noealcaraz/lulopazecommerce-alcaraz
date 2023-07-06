import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';
import './CartOverlay.css'
import { useLocation } from 'react-router-dom';
import CartProduct from '../../components/Cards/CartProduct';


const CartOverlay = () => {
  const { cart, setCart } = useContext(CartContext);
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.cartItem) {
      setCart((prevCart) => [...prevCart, state.cartItem]);
    }
  }, [state, setCart]);

  return (
    <div className="cart-overlay">
      <h2 className="cart-overlay-title">Carrito de compras</h2>  
      {cart.length === 0 ? (
        <p className="cart-overlay-empty">El carrito está vacío.</p>
      ) : (
        cart.map((product) => (
          <CartProduct 
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          />
        ))
      )}
    </div>
    
  );
};

export default CartOverlay;
