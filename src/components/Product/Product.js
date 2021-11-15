import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { title, image, description, price } = props.product;

    return (
        <div className="product">
            <div>
                <img className="product-image" src={image} alt="" />
            </div>
            <div className="product_details">
                <h4 className="product-name">{title}</h4>
                <p>Cost Per Person: {price}</p>
                <p>{description}</p>
                <Link to="/shipping" className="btn p-2">View Details</Link>
            </div>
        </div>
    );
};
export default Product;