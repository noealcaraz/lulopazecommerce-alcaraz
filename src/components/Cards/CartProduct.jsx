import React, { useState } from 'react';
import './CartProduct.css';
import ItemCount from '../ItemCount/ItemCount';

const CartProduct = ({ img, name, price, productId }) => {
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(price);

  const handleQuantityChange = (newCantidad) => {
    setCantidad(newCantidad);
    const newPrecioTotal = price * newCantidad;
    setPrecioTotal(newPrecioTotal);
  };

  return (
    <>
      <div className='bloquecard'>
        <div className="cart-product" key={productId}>
          <img className="cart-product-img" src={img} alt={name} />
          <div className="cart-product-info">
            <h3 className="cart-product-name"> {name}</h3>
            <p className="cart-product-price">Precio: ${price}</p>
          </div>
          <span>
            <ItemCount stock={10} onQuantityChange={handleQuantityChange} />
          </span>
          <div className='totalapagar'>
            <td colSpan={3} className="text-end">Total a Pagar </td>
            </div>
            <div className='totalapagar'>
            <td className="text-center">${precioTotal}</td>       
            </div>                      
          
        </div>
      </div>
    </>
  )
}

export default CartProduct;
