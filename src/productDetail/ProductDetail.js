import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../fakeData/FakeData';

const ProductDetail = () => {
    const {menuId} = useParams();
    const [products, setProducts] = useState(FakeData);
        return (
        <div>
            {
                products.filter(pd=>pd.id===`${menuId}`).map(product=>
                    <Card className="text-center" style={{ width: '350px', margin: 'auto'}}>
                        <Card.Img src={product.image}/>
                        <Card.Body>
                            <Card.Title>{product.item}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.details}</Card.Text>
                            <h2>${product.price}</h2>
                        </Card.Body>
                    </Card>
                    )
            }
        </div>
    );
};

export default ProductDetail;