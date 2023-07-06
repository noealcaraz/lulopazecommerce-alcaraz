import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./CardMaceta.css";


const CardMaceta = ({ img, name, price, description, showBuyButton, handleBuyButtonClick, addToCart }) => {
    return (
        <div className="card-container">
            <Card className="custom-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name}/>
                <Card.Body>
                    <Card.Title className='letrita'>{name}</Card.Title>
                    <Card.Text className='letrita2'>
                        {description}
                    </Card.Text>
                    <Card.Text className='letritapre'>
                        ${price}
                    </Card.Text>
                    {showBuyButton ? (
                        <Button variant="outline-warning" onClick={addToCart}>COMPRAR</Button>
                    ) : (
                        <Button variant="outline-warning" onClick={handleBuyButtonClick}>+ info</Button>
                        )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardMaceta;
