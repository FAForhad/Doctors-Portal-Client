import React from 'react';

const Review = ({ review }) => {
    const { name, review: userReview, location, img } = review
    return (
        <div>
            <div className="card shadow-md">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="flex items-center mt-6 ">
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <h2>{location}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;