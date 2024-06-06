import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './SchedulePage.css';

const schedule = [
  {
    day: 'Day 1',
    destinations: [
      {
        name: 'Destination A',
        position: [41.013, 28.949],
        description: 'Description of Destination A',
      },
      {
        name: 'Destination B',
        position: [41.017, 28.953],
        description: 'Description of Destination B',
      },
    ],
  },
  {
    day: 'Day 2',
    destinations: [
      {
        name: 'Destination C',
        position: [41.020, 28.960],
        description: 'Description of Destination C',
      },
      {
        name: 'Destination D',
        position: [41.023, 28.965],
        description: 'Description of Destination D',
      },
    ],
  },
  // Add more days and destinations as needed
];

const SchedulePage = () => {
  const allPositions = schedule.flatMap(day => day.destinations.map(dest => dest.position));

  return (
    <Container fluid className="schedule-page">
      <Row>
        <Col md={6} className="schedule-list">
          {schedule.map((day, index) => (
            <div key={index}>
              <h2>{day.day}</h2>
              {day.destinations.map((destination, idx) => (
                <Card className="mb-3" key={idx}>
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>{destination.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ))}
        </Col>
        <Col md={6} className="schedule-map">
          <MapContainer center={allPositions[0]} zoom={13} style={{ height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {allPositions.map((position, index) => (
              <Marker key={index} position={position}>
                <Popup>{schedule.flatMap(day => day.destinations)[index].name}</Popup>
              </Marker>
            ))}
            <Polyline positions={allPositions} color="blue" />
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
