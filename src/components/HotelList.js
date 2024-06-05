import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import './HotelList.css';

const hotels = [
  {
    name: 'Delta Hotel Istanbul',
    price: '$87.0/night',
    rating: '8.1',
    reviews: '2124 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/cd/94/06/exterior.jpg?w=700&h=-1&s=1', // Replace with actual image path
    position: [41.0128, 28.9647]
  },
  {
    name: 'Hotel B',
    price: '$120.0/night',
    rating: '7.5',
    reviews: '1543 reviews',
    image: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232&ar=16x9', // Replace with actual image path
    position: [41.0228, 28.9747]
  },
  {
    name: 'Hotel C',
    price: '$140.0/night',
    rating: '9.0',
    reviews: '3056 reviews',
    image: 'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg', // Replace with actual image path
    position: [41.0328, 28.9847]
  }
];

const HotelList = () => {
  return (
    <Container className="hotel-list-container mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Set your lodging (Optional)</h1>
          <p className="text-center mb-4">Add your lodging, and we'll craft the ideal route around your stay. Optimized adventures start at your doorstep!</p>
          <Form>
            <Form.Group controlId="formSearch" className="mb-4">
              <InputGroup>
                <Form.Control type="text" placeholder="Search your stay address or hotel name" />
                <Button variant="outline-secondary">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form.Group>
            <h3 className="mb-4">Top Hotel Picks Just For You!</h3>
            <p className="mb-4">We've picked hotels that minimize your commute and maximize your sightseeing. Enjoy a hassle-free stay!</p>
            {hotels.map((hotel, index) => (
              <Card key={index} className="mb-4 hotel-card">
                <Row noGutters>
                  <Col md={4}>
                    <Card.Img src={hotel.image} alt={hotel.name} className="hotel-image"/>
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{hotel.name}</Card.Title>
                      <Card.Text>
                        <strong>Price: {hotel.price}</strong><br />
                        Rating: {hotel.rating} ({hotel.reviews})<br />
                        <i className="fas fa-check-circle text-success"></i> Free cancellation<br />
                        <i className="fas fa-map-marker-alt text-danger"></i> Best possible location
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button className="btn btn-primary mt-4" block>
              Let's go to my trip!
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <MapContainer center={[41.0128, 28.9647]} zoom={13} className="hotel-map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hotels.map((hotel, index) => (
              <Marker key={index} position={hotel.position}>
                <Popup>{hotel.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelList;
