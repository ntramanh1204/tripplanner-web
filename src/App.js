import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import InspiringSection from './components/InspiringSection';
import CustomerFeedbacks from './components/CustomerFeedbacks';
import TripPlanner from './components/TripPlanner';
import HotelList from './components/HotelList';
import SchedulePage from './components/SchedulePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
      <Header />
        <Routes>
        {/* <Route path="/customize" element={<TripPlanner />} /> Updated syntax for routing components */}
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/schedule" element={<SchedulePage />} /> {/* New schedule page route */}
          <Route path="/" element={<MainBanner />} />
          <Route path="/create-trip" element={<TripPlanner />} />
        </Routes>
      {/* <MainBanner /> */}
      <InspiringSection />
      <CustomerFeedbacks />
      <Footer /> 
      </div>
    </Router>
  );
}

export default App;
