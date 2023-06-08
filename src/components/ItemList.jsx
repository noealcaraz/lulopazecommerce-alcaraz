import Item from "./Item";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ItemList = ({ productos, cat }) => {
  console.log(productos);
  console.log(cat);

  const catFilter = cat.filter((cat) => {
    return cat === "Pintadas";
  });

  console.log(catFilter);

  return (
    <>
      <Container className="container">
        {productos.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
