import { useEffect, useState } from "react";

const ItemCount = ({ stock, onQuantityChange }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      onQuantityChange(cantidad + 1); // Llamada a la función onQuantityChange con la nueva cantidad
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      onQuantityChange(cantidad - 1); // Llamada a la función onQuantityChange con la nueva cantidad
    }
  };

  useEffect(() => {
    setCantidad(1);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light" onClick={decrementarCantidad}>
              -
            </button>
            <button type="button" className="btn btn-light">
              {cantidad}
            </button>
            <button type="button" className="btn btn-light" onClick={incrementarCantidad}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
