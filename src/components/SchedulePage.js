import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt, FaWalking, FaBus, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SchedulePage.css';

const createNumberedMarkerIcon = (number) => {
  const markerHtmlStyles = `
    background-color: #ff9800; 
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
    iconSize: [30, 42], // Adjust as needed
    iconAnchor: [15, 42], // Adjust as needed
  });
  return icon;
};

// Custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://example.com/marker-icon.png', // Replace with the URL of your marker icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://example.com/marker-shadow.png', // Replace with the URL of your marker shadow
  shadowSize: [41, 41]
});

const schedule = [
  {
    day: 'Friday, June 14th',
    destinations: [
      {
        name: 'Siglo\'s House',
        position: [21.0285, 105.8542],
        description: 'Shaded, vibrant city park with a large lake, framed by mature trees, fitness paths & cafes.',
        time: '7:30 AM - 8:30 AM',
        cost: '$26',
        duration: '1 hr',
        travel: '16 - 23 min walking',
        img: 'image_url_here',
      },
      {
        name: 'Thong Nhat Park',
        position: [21.017, 105.848],
        description: 'Shaded, vibrant city park with a large lake, framed by mature trees, fitness paths & cafes.',
        time: '9:00 AM - 11:00 AM',
        cost: 'Free',
        duration: '2 hrs',
        travel: '12 - 15 min by bus',
        img: 'image_url_here',
      },
      {
        name: 'Hoan Kiem Lake',
        position: [21.028, 105.852],
        description: 'Lake featuring a temple on a small island reached via a wooden bridge & a tower on another island.',
        time: '11:30 AM - 12:30 PM',
        cost: 'Free',
        duration: '1 hr',
        travel: '10 min walking',
        img: 'image_url_here',
      },
    ],
  },
  {
    day: 'Saturday, June 15th',
    destinations: [
      {
        name: 'Vietnam Museum of Ethnology',
        position: [21.0401, 105.7894],
        description: 'Museum showcasing the cultural heritage of Vietnam\'s 54 ethnic groups through artifacts, exhibits, and demonstrations.',
        time: '9:00 AM - 11:00 AM',
        cost: '$5',
        duration: '2 hrs',
        travel: '20 min by taxi',
        img: 'image_url_here',
      },
      {
        name: 'Temple of Literature',
        position: [21.0285, 105.8355],
        description: 'Temple of Confucius in Hanoi, known as the first university of Vietnam.',
        time: '11:30 AM - 12:30 PM',
        cost: '$3',
        duration: '1 hr',
        travel: '10 min walking',
        img: 'image_url_here',
      },
      {
        name: 'Old Quarter',
        position: [21.0333, 105.8500],
        description: 'Bustling area of narrow streets, markets, and historic architecture.',
        time: '1:00 PM - 3:00 PM',
        cost: 'Free',
        duration: '2 hrs',
        travel: '15 min by bus',
        img: 'image_url_here',
      },
    ],
  },
  // Add more days and destinations as needed
];

const SchedulePage = () => {
  const [openDay, setOpenDay] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggle = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  const allPositions = schedule.flatMap(day => day.destinations.map(dest => dest.position));

  const MapResizer = ({ showSidebar }) => {
    const map = useMap();

    useEffect(() => {
      map.invalidateSize();
    }, [showSidebar, map]);

    return null;
  };

  const createNumberedMarkerIcon = (number) => {
    const markerHtmlStyles = `
      background-color: #ff9800; 
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 1px solid #fff;
    `;

    return L.divIcon({
      className: "custom-marker-icon",
      html: `<span style="${markerHtmlStyles}">${number}</span>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    });
  };

  // Calculate total number of destinations
  const totalDestinations = schedule.reduce((acc, day) => acc + day.destinations.length, 0);

  // Generate array of sequential numbers
  const sequentialNumbers = Array.from({ length: totalDestinations }, (_, i) => i + 1);

  
  
  return (
    <Container fluid className="schedule-page">
      <style jsx>{` /* Add this style block for the hover effect */
        .dropdown-button:hover,
        .dropdown-button.open { 
          background-color: #25abb9 !important; /* Use !important to override Bootstrap's default */
          border-color: #25abb9;  /* Ensure border matches the background */
        }
      `}</style>
      {/* <Row className="mb-4">
        <Col md={8} className="text-left align-self-end">
          <h2>14 Jun 24 - 19 Jun 24</h2>
          <p>2 People</p>
        </Col>
        <Col md={4} className="text-center">
          <h1>Hanoi</h1>
        </Col>
      </Row> */}
      <Row>
        <Col md={6} className="schedule-list">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <Button onClick={() => handleToggle(dayIndex)} aria-controls={`collapse-text-${dayIndex}`} aria-expanded={openDay === dayIndex} className={`mb-3 dropdown-button ${openDay === dayIndex ? 'open' : ''}`}>
                {day.day}
                <span className="dropdown-arrow">{openDay === dayIndex ? '▲' : '▼'}</span>
              </Button>
              <Collapse in={openDay === dayIndex}>
                <div id={`collapse-text-${dayIndex}`}>
                  {day.destinations.map((destination, destIndex) => (
                    <Card className="mb-3" key={destIndex}>
                      <Card.Body>
                        <Card.Title>
                          <FaMapMarkerAlt className="location-icon" /> {sequentialNumbers[dayIndex * day.destinations.length + destIndex]}. {destination.name}
                        </Card.Title>
                        
                        <Card.Text><FaClock /> {destination.time}</Card.Text>
                        <Card.Text><FaMoneyBillWave /> {destination.cost}</Card.Text>
                        <Card.Text><FaWalking /> {destination.duration}</Card.Text>
                        <Card.Text><FaBus /> {destination.travel}</Card.Text>
                        {/* {destination.img && <img src={destination.img} alt={destination.name} style={{ width: '100%' }} />} */}
                        </Card.Body>
                    </Card>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
        </Col>
        <Col md={6} className="schedule-map">
          <MapContainer center={allPositions[0]} zoom={13} style={{ height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {schedule.flatMap((day, dayIndex) =>
              day.destinations.map((destination, destIndex) => (
                <Marker
                  key={`${dayIndex}-${destIndex}`}
                  position={destination.position}
                  icon={createNumberedMarkerIcon(sequentialNumbers[dayIndex * day.destinations.length + destIndex])}
                >
                  <Popup>{destination.name}</Popup>
                </Marker>
              ))
            )}
            <Polyline positions={allPositions} color="#25abb9" />
            <MapResizer showSidebar={showSidebar} />
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
