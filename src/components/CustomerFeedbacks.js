import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomerFeedback = () => {
    const feedbacks = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'images/white.jpg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ex euismod, aliquet urna sed, aliquam nunc.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: 'images/white.jpg',  
            testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        // Add more feedbacks here
    ];

    return (
        <Carousel style={{ minHeight: '200px' }}>
            {feedbacks.map((feedback) => (
                <Carousel.Item key={feedback.id}>
                    <img
                        className="d-block"
                        src={feedback.photo}
                        alt={feedback.name}
                        style={{ maxWidth: '200px', height: 'auto' }}
                    />
                    <Carousel.Caption>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff9ae',
                            padding: '20px',
                            borderRadius: '10px',
                            maxWidth: '500px',
                            margin: 'auto',
                            color: 'black'
                        }}>
                            <h3>{feedback.name}</h3>
                            <p>{feedback.testimonial}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomerFeedback;