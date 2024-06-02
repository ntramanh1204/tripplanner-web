import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Social Media</h5>
                        <ul>
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Newsletter Signup</h5>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Subscribe</Button>
                        </Form>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Information</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 123 456 7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;