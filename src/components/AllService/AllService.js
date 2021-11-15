import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const AllService = (props) => {

    const { title,description,price,image } = props.product;
    const history = useHistory();
    const handleProceedToShipping = () => {
        history.push('/shipping');}
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <br />
                <h4 className="product-name">{title}</h4>
            
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <br />
                <button
                    // onClick={() => props.handleAddToCart(props.product)}
                    onClick={handleProceedToShipping} 
                    
                    className="btn-regular"
                > <FontAwesomeIcon icon={faShoppingCart} /> Book Now</button>
            </div>
        </div>
    );
};

export default AllService;