import React, { useState, useEffect } from 'react'; import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Container, Row, Col, Button, Form, InputGroup, FormCheck } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TripPlanner.css';
import SearchBox from './SearchBox';


const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

const TripPlanner = () => {
  //Map
  const [center, setCenter] = useState([44.500000, -89.500000]);

  useEffect(() => {
    const getIpInfo = async () => {
      const ip = '58.186.240.7';
      const accessKey = '2e5760aa-2495-42d3-96c4-6b10930f920a';
      const url = 'https://apiip.net/api/check?ip=' + ip + '&accessKey=' + accessKey;

      const response = await axios.get(url);
      console.log(response.data); // Add this line
      const result = response.data;

      setCenter([result.latitude, result.longitude]);
    };
    getIpInfo();
  }, []);
  //Navigation
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/hotels');
  };

  return (
    <Container className="trip-planner-container mt-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <Form className="trip-planner-form border p-4 rounded">
          <h1 className="text-center mb-4">Plan dream vacation</h1>
          <Form.Label>Where do you want to go?</Form.Label>
          <Form.Group controlId="formDestination" className="d-flex align-items-center">
            <div className="w-100 me-2">
              <Form.Control type="text" placeholder="Enter your dream destination" />
            </div>
            <div className="w-25">
              <Button variant="outline-secondary" block>
                Select dates
              </Button>
            </div>
          </Form.Group>
          <Form.Group controlId="formAddDestination" className="mt-3 d-flex justify-content-center align-items-center">
            <Button variant="danger" className="m-auto">+ Add destination</Button>
          </Form.Group>
          <Form.Group controlId="formActivities" className="mt-4">
            <Form.Label>Select the kind of activities you want to do</Form.Label>
            <div className="d-flex flex-wrap justify-content-center">
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
          <Form.Group controlId="formBudget" className="mt-3">
            <Form.Label>Budget per person (nightly):</Form.Label>
            <InputGroup>
              <Form.Control type="number" />
              <InputGroup.Text>Currency</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formTravelStyle" className="mt-3">
            <Form.Label>Travel Style:</Form.Label>
            <FormCheck inline label="Adventure" name="travelStyle" type="radio" />
            <FormCheck inline label="Relaxation" name="travelStyle" type="radio" />
            <FormCheck inline label="Culture" name="travelStyle" type="radio" />
            <FormCheck inline label="Luxury" name="travelStyle" type="radio" />
            <FormCheck inline label="Family-friendly" name="travelStyle" type="radio" />
          </Form.Group>
          <Form.Group controlId="formAccommodation" className="mt-4">
            <Form.Label>Accommodation Preference:</Form.Label>
            <FormCheck inline label="Hotel" name="accommodation" type="radio" />
            <FormCheck inline label="Hostel" name="accommodation" type="radio" />
            <FormCheck inline label="Resort" name="accommodation" type="radio" />
            <FormCheck inline label="Vacation Rental" name="accommodation" type="radio" />
          </Form.Group>
          <Form.Group controlId="formTransportation" className="mt-4">
            <Form.Label>Transportation Preference:</Form.Label>
            <FormCheck inline label="Flying" name="transportation" type="radio" />
            <FormCheck inline label="Road Trip" name="transportation" type="radio" />
            <FormCheck inline label="Cruise" name="transportation" type="radio" />
          </Form.Group>
          <div className="text-center">
            <Button onClick={handleNavigation} className="btn btn-primary mt-4">
              Search for Hotels
            </Button>
          </div>
        </Form>
      </Col>
      <Col md={6}>
          <SearchBox setCoordinates={setCenter} />
          <MapContainer center={center} zoom={13} className="map-container">
            {<MapUpdater center={center} />}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </Col>
    </Row>
  </Container>

  );
};

export default TripPlanner;
