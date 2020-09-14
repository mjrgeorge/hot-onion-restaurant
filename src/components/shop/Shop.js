import {Button } from '@material-ui/core';
import React, { useState } from 'react';
import Product from '../product/Product';
import FakeData from '../../fakeData/FakeData';
import {Link, useParams} from "react-router-dom";

const Shop = () => {
    const [products, setProducts] = useState(FakeData);
    const {menuItem} = useParams();
    return (
        <>
            <div className="text-center mt-3">
                <Link to="/menu/breakfast"><Button>Breakfast</Button></Link>
                <Link to="/menu/lunch"><Button>Lunch</Button></Link>
                <Link to="/menu/dinner"><Button>Dinner</Button></Link>
            </div>
            <div className="row mt-3">
                {
                    products.filter(person => person.category ===`${menuItem}`).map(product =><Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className = "text-center">
                <Button variant="secondary" size="lg" disabled>Order Now</Button>{' '}
            </div>
        </>
    );
};

export default Shop;