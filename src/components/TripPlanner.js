import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import './TripPlanner.css';

const TripPlanner = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">Plan your next adventure</h1>
          <Form>
            <Form.Group controlId="formCity">
              <Form.Label>Where do you want to go?</Form.Label>
              <Form.Control type="text" placeholder="Select a city" />
            </Form.Group>
            <Form.Group controlId="formDates" className="mt-3">
              <Button variant="outline-secondary">Select dates</Button>
            </Form.Group>
            <Form.Group controlId="formAddDestination" className="mt-3">
              <Button variant="danger">+ Add destination</Button>
            </Form.Group>
            <Form.Group controlId="formActivities" className="mt-4">
              <Form.Label>Select the kind of activities you want to do</Form.Label>
              <div className="d-flex flex-wrap">
                <Button variant="outline-secondary" className="me-2 mb-2">Kid Friendly</Button>
                <Button variant="outline-secondary" className="me-2 mb-2">Museums</Button>
                <Button variant="success" className="me-2 mb-2">Shopping</Button>
                <Button variant="outline-secondary" className="me-2 mb-2">Historical</Button>
                <Button variant="outline-secondary" className="me-2 mb-2">Outdoor Adventures</Button>
                <Button variant="success" className="me-2 mb-2">Art & Cultural</Button>
                <Button variant="outline-secondary" className="me-2 mb-2">Amusement Parks</Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formPeople" className="mt-4">
              <Form.Label>How many people are going?</Form.Label>
              <InputGroup>
                <Form.Control type="number" defaultValue={1} min={1} />
                <InputGroup.Text>Person</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default TripPlanner;
