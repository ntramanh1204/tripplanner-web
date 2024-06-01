import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const MainBanner = () => {
    return (
        <Container fluid className="p-3 mb-2 bg-primary text-white">
            <Row className="justify-content-md-center">
                <img src="path/to/illustrative-image.jpg" alt="Illustrative Image" />
                <h1>Discover Your Perfect Journey with TripPlanner AI</h1>
                <p>Your ultimate companion for personalized and seamless travel planning.</p>
                <Button variant="light" className="rounded-pill">Create a New Trip</Button>
            </Row>
        </Container>
    );
}

export default MainBanner;