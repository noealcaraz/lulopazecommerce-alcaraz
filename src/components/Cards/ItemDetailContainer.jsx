import React from 'react';
import { useParams } from 'react-router-dom';
import productos from "../../data.json";
import { Card } from 'react-bootstrap';
import "./item.css"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productos.find((product) => product.id === productId);

  if (!product) {
    return <div>No se encontró el producto</div>;
  }
  
  return (
    <div>
      <Card className="custom-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://d2r9epyceweg5n.cloudfront.net/stores/001/202/532/products/maceta-201-77c393e77a364cfb8615900045278377-1024-1024.jpg" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Categoria: {product.category}
                    </Card.Text>
                    <Card.Text>
                        Detalle: {product.description}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${product.price}
                    </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default ItemDetailContainer;
