import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const InspiringSection = () => {
    return (
        <div style={{ margin: '0 2vw' }}>
            <h1 className="text-center my-5">Your <span style={{ color: 'green' }}>AI-Powered</span> Trip</h1>

            <div className="d-flex flex-wrap" style={{ textAlign: 'left' }}>
                <Row className="w-100 p-6 sm:w-1/2 md:mt-8">
                    <Col md={6} className="d-flex justify-content-center">
                        <img alt="The most optimal" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" className="mx-auto" style={{ color: 'transparent' }} src="images/homepage_description_right.jpg" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
                        <h3 className="mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-black md:text-3xl">The most optimal</h3>
                        <p className="text-gray-600">
                            Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.
                        </p>
                    </Col>
                </Row>
            </div>
           
            <div className="d-flex flex-wrap" style={{ textAlign: 'left'}}>
                <Row className="w-100 p-6 sm:w-1/2 md:mt-8">
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
                        <h3 className="mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-black md:text-3xl">Get Inspired</h3>
                        <p className="text-gray-600">
                            Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Trip Planner AI.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img alt="The most optimal" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" className="mx-auto" style={{ color: 'transparent' }} src="images/homepage_description_right.jpg" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default InspiringSection;