import React from 'react'

const CartProduct = ({ img, name, price, productId }) => {
  return (
    <div className="cart-product" key={productId}>
        <h1>holi</h1>
      <img className="cart-product-img" src={img} alt={name} />
      <div className="cart-product-info">
        <h3 className="cart-product-name">Nombre: {name}</h3>
        <p className="cart-product-price">${price}</p>
      </div>
    </div>
  )
}

export default CartProduct;