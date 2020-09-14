import {Button, Link } from '@material-ui/core';
import React, { useState } from 'react';
import Product from '../product/Product';
import FakeData from '../../fakeData/FakeData';

const Shop = () => {
    const [products, setProducts] = useState(FakeData);
    return (
        <>
            <div className="text-center mt-3">
                <Link to=''>
                    <Button>Breakfast</Button>
                </Link>
                <Link to=''>
                    <Button>Lunch</Button>
                </Link>
                <Link to=''>
                    <Button>Dinner</Button>
                </Link>
            </div>
            <div className="row mt-3">
                {
                    products.map(product =><Product product={product} key={product.id}></Product>)
                }
            </div>
        </>
    );
};

export default Shop;