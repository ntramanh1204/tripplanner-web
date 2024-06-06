import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar variant="white" style={{ backgroundColor: 'transparent', margin: '0 2vw' }}>
            <Navbar.Brand href="#home">
                <img
                    src="/images/logo.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                {' '}
                Trip Planner AI
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-start">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            <Navbar.Collapse className="justify-content-end">
                <Button variant="dark" className="rounded-pill">
                    Sign In
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;