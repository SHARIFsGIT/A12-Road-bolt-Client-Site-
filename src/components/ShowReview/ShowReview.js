import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './ShowReview.css'

const ShowReview = () => {

    const [displayReview, setDisplayReview] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-coast-78516.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data.products);
                setDisplayReview(data.review);
            });
    }, []);

    return (
        <div>       
            <h1 className="text-center my-3">Users Review</h1>
                    <ul className="review">
                    {
                        displayReview.map(review => <SingleReview
                            key={review._id}
                            review={review}
                        >  
                        </SingleReview>)                 
                     }
                    </ul>
        </div>
    );
};

export default ShowReview;