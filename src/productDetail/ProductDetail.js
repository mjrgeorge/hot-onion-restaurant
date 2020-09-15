import React, {useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../fakeData/FakeData';


const ProductDetail = () => {
    const {menuId} = useParams();
    const [products, setProducts] = useState(FakeData);
    let [count, setCount] = useState(1);
   
        return (
        <>
            {
                products.filter(pd=>pd.id===`${menuId}`).map(product=>
                    <div className="d-flex m-5 p-5">
                        <div className="p-5 text-center">
                            <h4>{product.item}</h4>
                            <p>{product.details}</p>
                            <h1>${(product.price*count).toFixed(2)}
                            </h1>
                            <h2>
                            <Button onClick={()=>setCount(count+1)} variant="outline-warning">+</Button>
                            <span> {count} </span>
                            <Button onClick={()=>setCount(count>0?count-1:count=0)} variant="outline-warning">-</Button>
                            </h2>
                            <Link to="/cart">
                                <Button variant="secondary" size="lg" block>Added</Button>
                            </Link>
                        </div>
                        <Card>
                            <Card.Img className="w-100" src={product.image} alt=""/>
                        </Card>
                    </div>
                    )
            }
        </>
    );
};

export default ProductDetail;