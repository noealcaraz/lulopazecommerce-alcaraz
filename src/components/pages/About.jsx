import React from 'react';
import Item from "../Cards/Item";
import productos from '../../data.json';

export const About = () => {
  // Filtra los productos con la categoría "barnizadas"
  const barnizadas = productos.filter((product) => product.category === 'Barnizadas');

  return (
    <div>
    <h1>Barnizadas</h1>
    {barnizadas.map((product) => (
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

export default About;

