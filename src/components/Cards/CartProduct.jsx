import React from 'react';
import './CartProduct.css';
import ItemCount from '../ItemCount/ItemCount';

const CartProduct = ({ img, name, price, productId }) => {
  return (
    <div className='bloquecard'>
    <div className="cart-product" key={productId}>
      <img className="cart-product-img" src={img} alt={name} />
      <div className="cart-product-info">
        <h3 className="cart-product-name"> {name}</h3>
        <p className="cart-product-price">Precio: ${price}</p>
      </div>
      <span>
            <ItemCount/>
      </span>
      <tr>
        <td colSpan={3} className="text-end">Total a Pagar</td>
        <td className="text-center">${price}</td>                                
     </tr>
    </div>
    </div>
  )
}

export default CartProduct;