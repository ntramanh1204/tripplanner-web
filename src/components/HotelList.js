import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HotelList.css';


const hotels = [
  {
    name: 'Hanoi La Siesta Hotel Trendy',
    price: '$75.00/night',
    rating: '9.2',
    reviews: '5,113 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/44/19/22/hanoi-la-siesta-hotel.jpg?w=700&h=-1&s=1',
    position: [21.0292, 105.8525] // Near Hoan Kiem Lake
  },
  {
    name: 'Sofitel Legend Metropole Hanoi',
    price: '$280.00/night',
    rating: '9.4',
    reviews: '3,147 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/22/24/8d/sofitel-legend-metropole.jpg?w=700&h=-1&s=1',
    position: [21.0244, 105.8558] // Near the Opera House
  },
  {
    name: 'Hanoi Golden Holiday Hotel',
    price: '$45.00/night',
    rating: '8.8',
    reviews: '2,023 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/44/2a/d5/exterior.jpg?w=700&h=-1&s=1',
    position: [21.0305, 105.8469] // Near the Old Quarter
  },
  {
    name: 'Apricot Hotel',
    price: '$110.00/night',
    rating: '9.1',
    reviews: '2,934 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/09/f7/8c/apricot-hotel.jpg?w=700&h=-1&s=1',
    position: [21.0265, 105.8514] // Also near Hoan Kiem Lake
  },
  {
    name: 'O\'Gallery Premier Hotel & Spa',
    price: '$60.00/night',
    rating: '9.0',
    reviews: '2,216 reviews',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/58/f0/48/o-gallery-premier-hotel.jpg?w=700&h=-1&s=1',
    position: [21.0312, 105.8456] // Near the Old Quarter
  }
];


// Custom marker icon with a number label
const createNumberedMarkerIcon = (number) => {
  const markerHtmlStyles = `
    background-color: #ffa726; /* Light orange color */
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 1px solid #fff;
  `;

  const icon = L.divIcon({
    className: "custom-marker-icon",
    html: `<span style="${markerHtmlStyles}">${number}</span>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });
  return icon;
};

const HotelList = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/schedule');
  };

  const [selectedHotelIndex, setSelectedHotelIndex] = useState(null);

  const handleHotelClick = (index) => {
    setSelectedHotelIndex(index === selectedHotelIndex ? null : index);
  };

  const formRef = useRef(null);
  const mapRef = useRef(null);

  useLayoutEffect(() => { // Use useLayoutEffect for initial height sync
    const updateHeights = () => {
      if (formRef.current && mapRef.current) {
        const formHeight = formRef.current.offsetHeight;
        mapRef.current.style.height = `${formHeight}px`;
      }
    };

    updateHeights(); // Call it initially
    window.addEventListener('resize', updateHeights); // Update on resize
    return () => window.removeEventListener('resize', updateHeights);
  }, [selectedHotelIndex]); // Add dependency to trigger on selection change

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container className="hotel-list-container mt-5">
      <Row className="justify-content-center">
        <Col md={6} ref={formRef}>
          <div className="fixed-header">
            <h1 className="text-center mb-4">Set your lodging (Optional)</h1>
            <p className="text-center mb-4">
              Add your lodging, and we'll craft the ideal route around your
              stay. Optimized adventures start at your doorstep!
            </p>
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
              <p className="mb-4">
                We've picked hotels that minimize your commute and maximize your
                sightseeing. Enjoy a hassle-free stay!
              </p>
            </Form>
          </div>

          {/* Scrollable hotel card container */}
          <div className="hotel-card-list">
            {hotels.map((hotel, index) => (
              <Card
                key={index}
                className={`mb-4 hotel-card ${index === selectedHotelIndex ? "selected" : ""
                  }`}
                onClick={() => handleHotelClick(index)}
              >
                <Row noGutters>
                  {/* <Col md={4}>
                    <Card.Img src={hotel.image} alt={hotel.name} className="hotel-image"/>
                  </Col> */}
                  <Col md={12}>
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
          </div>
          {/* Look up for destinations button with modified color */}
          <Button
            onClick={handleNavigation}
            style={{ backgroundColor: "#25abb9", borderColor: "#25abb9" }}
            className="mt-4"
            block
          >
            Look up for destinations
          </Button>
        </Col>
        {/* </Form> */}
        {/* </Col> */}
        {/* Map Container */}
        <Col md={6} className="schedule-map">
        <MapContainer center={[41.0128, 28.9647]} zoom={13} style={{ height: '100vh' }}>
          
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hotels.map((hotel, index) => (
              <Marker
                key={index}
                position={hotel.position}
                icon={createNumberedMarkerIcon(index + 1)}
              >
                <Popup>{hotel.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
      <style jsx>{`
        .hotel-card {
          cursor: pointer; /* Add this line */
        }
      `}</style>
    </Container>
  );
};

export default HotelList;
