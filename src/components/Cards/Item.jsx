import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./item.css"

const Item = ({ id, name, price, category}) => {
    return (
        <div>
            <div key={id} className="card-container">
                <Card className="custom-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://d2r9epyceweg5n.cloudfront.net/stores/001/202/532/products/maceta-201-77c393e77a364cfb8615900045278377-1024-1024.jpg" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Categoria: {category}
                            </Card.Text>
                            <Card.Text>
                                Precio: ${price}
                            </Card.Text>
                            <Button className="btn btn-dark">
                            <Link to={`/item/${id}`}>Detalle</Link>
                            </Button>
                        </Card.Body>
                </Card>
            </div>
        </div>

    );
  };
  
export default Item;