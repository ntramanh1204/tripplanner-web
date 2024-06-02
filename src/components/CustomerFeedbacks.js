import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomerFeedback = () => {
    const feedbacks = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'john-doe.jpg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ex euismod, aliquet urna sed, aliquam nunc.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: 'jane-smith.jpg',
            testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        // Add more feedbacks here
    ];

    return (
        <Carousel>
            {feedbacks.map((feedback) => (
                <Carousel.Item key={feedback.id}>
                    <img
                        className="d-block w-100"
                        src={feedback.photo}
                        alt={feedback.name}
                    />
                    <Carousel.Caption>
                        <h3>{feedback.name}</h3>
                        <p>{feedback.testimonial}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomerFeedback;