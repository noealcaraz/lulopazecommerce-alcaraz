import React from 'react';
import Item from "../Cards/Item";
import productos from '../../data.json';

export const Contacto = () => {
  const pintadas = productos.filter((product) => product.category === 'Pintadas');
  return (
    <div>
      <h1>Pintadas a Mano</h1>
      {pintadas.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Contacto;