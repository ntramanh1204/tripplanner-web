import React from 'react';
import { Card } from 'react-bootstrap';

const InspiringSection = () => {
    return (
        <Card bg="dark" text="white">
            <Card.Img src="path/to/your/image.jpg" alt="Inspiring Image" />
            <Card.ImgOverlay>
                <Card.Text>
                    Let your next adventure begin here. Plan effortlessly with our AI-powered tools.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default InspiringSection;