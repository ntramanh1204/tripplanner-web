import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <img
                            src="/images/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        {' '}
                        <h4>Trip Planner AI</h4>
                        <h6>Your ultimate companion for personalized and seamless travel planning.</h6>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                            <li><a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
                            <li><a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Social Media</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="https://facebook.com" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://twitter.com" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://instagram.com" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Information</h5>
                        <p>Email: npl.working@gmail.com</p>
                        <p>Phone: +84 385 779 946</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;