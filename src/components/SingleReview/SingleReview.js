import React from 'react';

const SingleReview = (props) => {
    const {comments ,email} = props.review
    return (
        <li className="ps-3 pt-3 bg-warning rounded mx-3 " >
            <h4>Email: {email} </h4>
            <h5>{comments}</h5>
        
             </li>
    );
};

export default SingleReview;