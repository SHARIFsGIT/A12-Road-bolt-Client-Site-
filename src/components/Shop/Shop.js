import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';


const Shop = () => {
    
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-coast-78516.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data.products);
            });
    }, []);


    return (
        <>
            <h2 className="ms-5 mt-5">Tour Packages</h2>
                <div className="home-services">
                   {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                        
                        >  
                        </Product>)                 
                   }
                    
                </div>
        </>
    );
};

export default Shop;