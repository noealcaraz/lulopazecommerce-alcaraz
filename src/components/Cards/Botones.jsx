import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext'

const Botones = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
        <div className="row">
          <div className="col">
            <Link className="btn btn-primary" to={"/"}>Ver catálogo</Link>
          </div>
        </div>
        {cart.length > 0 && (
          <>
            <br />
            <div className="row">
              <div className="col">
                <Link className="btn btn-primary" to={"../shop"}>Finalizar Compra</Link>
              </div>
            </div>
          </>
        )}
      </div>
  )
}

export default Botones;