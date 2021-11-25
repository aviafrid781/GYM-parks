import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = [
        {
            "id": 1,
            "name": "Latif Mahmud",
            "comment": " First week I could barely walk or do any activities after my workout sessions. Slowly but steadily I began to build my stamina and strength and everything fell into place.Wonderful company",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0h2y4sVyt0qdSydIocAZj9XlFv_0dtCGIw&usqp=CAU"
        },
        {
            "id": 2,
            "name": "Junayed Ahmed",
            "comment": "Fitness is not about being better than someone else…..It’s about being better than you used to be. This company is good",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNUSbQzaP_bNkQc9beqNPFSVdNkvdUWlvsA&usqp=CAU"

        },
        {
            "id": 3,
            "name": "Lord Barn",
            "comment": "Everything In Your Body Starts Communicating.Basically, exercise turns the snail mail of our systems into bullet trains transporting important biochemical messages from This GYM company",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe4EOKIAhrYCWedDaQP0Tcr5az_diHbwAMw&usqp=CAU"
        }

    ]


    return (
        <div id="reviews" className="container">
            <h2 className="text-primary mt-5">Our Student Reviews</h2>
            <div className="row">

                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    >

                    </Review>

                    )}

            </div>

        </div>
    );
};

export default Reviews;