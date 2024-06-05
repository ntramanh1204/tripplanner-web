import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6+
import TripPlanner from './components/TripPlanner';
import HomePage from './components/pages/HomePage';
import HotelPage from './components/pages/HotelPage';
import SchedulePage from './components/SchedulePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> {/* Using Routes instead of Switch for v6+ */}
        <Route path="/customize" element={<TripPlanner />} /> {/* Updated syntax for routing components */}
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/schedule" element={<SchedulePage />} /> {/* New schedule page route */}
      </Routes>
    </Router>
  );
}

export default App;
