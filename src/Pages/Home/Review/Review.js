import React from 'react';
import './Review.css'

const Review = ({ review }) => {


    const { name, img, comment } = review;
    return (
        <div className="Review-container col-lg-4  col-sm-6  col-12">

            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className="text-danger">{comment}</p>

        </div>

    );
};

export default Review;