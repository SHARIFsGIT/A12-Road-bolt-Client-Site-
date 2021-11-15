import React, { useEffect, useState } from 'react';
// import useCart from '../../hooks/useCart';
// import Cart from '../Cart/Cart';
// import { addToDb} from '../../utilities/fakedb';
// import { useHistory } from 'react-router';
import './OrderReview.css'
import AllService from '../AllService/AllService';
import { Spinner } from 'react-bootstrap';

const OrderReview = () => {

    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-coast-78516.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data.products);
            });
    }, []);
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        (displayProducts.length ===0) ?
                        <div className="d-flex justify-content-between">
                            <div>
                            </div>
                            <div >
                                <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                            </div>
                        </div>
                        : 
                        displayProducts.map(product =><AllService
                            key={product._id}
                            product={product}
                            
                        ></AllService>)                
                   }
            </div>
        
        </div>
    );
};

export default OrderReview;