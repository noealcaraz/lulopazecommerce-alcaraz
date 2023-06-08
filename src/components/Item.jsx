import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productos from "../data.json"; 



const Item = ({ id, name, stock, category }) => {
    return (
    <div className="container">
        <div className="row">
            <div key={id} className="col-sm-6 align-items-center">
                <Card className="custom-card" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://d2r9epyceweg5n.cloudfront.net/stores/001/202/532/products/maceta-201-77c393e77a364cfb8615900045278377-1024-1024.jpg" />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Categoria: {category}
                    </Card.Text>
                    <Card.Text>
                        Stock: {stock}
                    </Card.Text>
                    <Button className="btn btn-primary">
                        <Link to={`/item/${id}`}>Detalle</Link>
                    </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    );
  };
  
export default Item;