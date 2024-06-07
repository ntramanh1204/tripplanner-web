import React, { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Container, Row, Col, Button, Form, InputGroup, FormCheck, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TripPlanner.css';
var data = require('./places.json');

const removeDiacritics = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const TripPlanner = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([{ destination: '', dateRange: { startDate: new Date(), endDate: new Date(), key: 'selection' }, showDateRangeSelector: false }]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleActivitySelect = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((act) => act !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };
  const [value, setValue] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [filteredData, setFilteredData] = useState([]);
  const inputRef = useRef(null);

  const handleNavigation = () => {
    navigate('/hotels');
  };

  const onChange = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    const filtered = data.filter(item => {
      const normalizedSearchTerm = removeDiacritics(searchTerm.toLowerCase());
      const place = removeDiacritics(item.place.toLowerCase());
      return normalizedSearchTerm && place.startsWith(normalizedSearchTerm); // Removed the condition
    }).slice(0, 5);
    setFilteredData(filtered);
    setHighlightedIndex(-1);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setFilteredData([]);
  };

  const handleKeyDown = (event) => {
    if (filteredData.length > 0) {
      if (event.key === 'ArrowDown') {
        setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
      } else if (event.key === 'ArrowUp') {
        setHighlightedIndex((prevIndex) => (prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1));
      } else if (event.key === 'Enter' && highlightedIndex >= 0) {
        onSearch(filteredData[highlightedIndex].place);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [filteredData, highlightedIndex]);
  const addDestination = () => {
    setDestinations([
      ...destinations,
      {
        destination: '',
        dateRange: { startDate: new Date(), endDate: new Date(), key: 'selection' },
        showDateRangeSelector: false
      }
    ]);
  };

  const handleDestinationChange = (event, index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index].destination = event.target.value;
    setDestinations(updatedDestinations);
  };

  const handleDateRangeChange = (index, ranges) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index].dateRange = ranges.selection;
    setDestinations(updatedDestinations);
  };

  const toggleDateRangeSelector = (index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index].showDateRangeSelector = !updatedDestinations[index].showDateRangeSelector;
    setDestinations(updatedDestinations);
  };
  

  return (
    <Container className="trip-planner-container mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <Form className="trip-planner-form border p-4 rounded">
            <h1 className="text-center mb-4">Plan dream vacation</h1>
            {destinations.map((dest, index) => (
              <div key={index}>
                <Form.Label>Where do you want to go?</Form.Label>
                <Form.Group controlId="formDestination" className="d-flex align-items-center">
                  <div className="w-100 me-2 position-relative">
                    <Form.Control
                      ref={inputRef}
                      type="text"
                      value={value}
                      onChange={onChange}
                      placeholder="Enter your dream destination"
                      autoComplete="off"
                    />
                    {filteredData.length > 0 && (
                      <Dropdown.Menu show className="w-100">
                        {filteredData.map((item, index) => (
                          <Dropdown.Item
                            key={item.place}
                            onClick={() => onSearch(item.place)}
                            active={index === highlightedIndex}
                          >
                            {item.place}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    )}
                  </div>
                  <div className="w-25">
                    {/* <Button variant="outline-secondary" block>
                  Select dates
                </Button> */}
                    <div className="mb-3 position-relative">
                      <Button variant="outline-secondary" block onClick={() => toggleDateRangeSelector(index)}>
                        {dest.dateRange.startDate ? (
                          `${dest.dateRange.startDate.toLocaleDateString()} - ${dest.dateRange.endDate.toLocaleDateString()}`
                        ) : (
                          'Select Dates'
                        )}
                      </Button>
                      {dest.showDateRangeSelector && (
                        <div style={{ position: 'absolute', zIndex: 9999, top: '100%', left: 0 }}>
                          <DateRange
                            editableDateInputs={true}
                            onChange={(ranges) => handleDateRangeChange(index, ranges)}
                            moveRangeOnFirstSelection={false}
                            ranges={[dest.dateRange]}
                            preventScroll={true}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Form.Group></div>
            ))}
            {/* <Form.Group controlId="formAddDestination" className="mt-3 d-flex justify-content-center align-items-center">
              <Button variant="danger" className="m-auto">+ Add destination</Button>
              <Button variant="danger" className="m-auto" onClick={addDestination}>+ Add destination</Button>
            </Form.Group> */}
            <Form.Group controlId="formActivities" className="mt-4">
                <Form.Label className="form-label">Select the kind of activities you want to do</Form.Label>
                <div className="d-flex flex-wrap justify-content-center">
                  {['Kid Friendly', 'Museums', 'Shopping', 'Historical', 'Outdoor Adventures', 'Art & Cultural', 'Amusement Parks'].map(activity => (
                    <Button
                      key={activity}
                      variant={selectedActivities.includes(activity) ? 'success' : 'outline-secondary'}
                      className="me-2 mb-2"
                      onClick={() => handleActivitySelect(activity)}
                      
                    >
                      {activity}
                    </Button>
                  ))}
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
              <Form.Label>Budget per person ($):</Form.Label>
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
        {/* <Col md={6}>
          <MapContainer center={[41.0128, 28.9647]} zoom={13} className="map-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </Col> */}
      </Row>
    </Container>
  );
};

export default TripPlanner;
