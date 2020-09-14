import {Card} from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    const product = props.product;
    const {id, item, description, price, image} = product;
    const history = useHistory();
    const handleSelectItem = (id)=> {
        const url = `/detail/${id}`
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <Card className="text-center" style={{ width: '350px', margin: '10px'}}>
            <Card.Img src={image}/>
            <Card.Body>
                <Card.Title>{item}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h3 onClick={()=>handleSelectItem(id)} style={{cursor: 'pointer'}}>${price}</h3>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Product;