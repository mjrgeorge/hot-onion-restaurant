import {Card} from 'react-bootstrap';
import React from 'react';

const Product = (props) => {
    const product = props.product;
    const {item, description, price, image} = product;
    return (
        <div className="col-md-4">
            <Card className="text-center" style={{ width: '18rem', margin: '10px'}}>
            <Card.Img src={image}/>
            <Card.Body>
                <Card.Title>{item}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h3>${price}</h3>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Product;