import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import bagImage from '../../assets/bag.png';
import CardMaceta from '../../components/Cards/CardMaceta';

const CartWidget = () => {
  const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCartClick = () => {
    setIsCartOpen(isCartOpen); // cambia el estado de isCartOpen al hacer clic
  };
  
  return (
    <div className="logo d-flex">
      <Link to="/carrito"> 
        <img src={bagImage} alt="imagen" onClick={handleCartClick} /> 
        <div className="number-container">
          <div className="number">{cart.length}</div>
        </div>
      </Link>
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-content">
            <h3>Carrito de compras</h3>
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
             cart.map(cart => <CardMaceta key={cart.id} {...cart} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;

