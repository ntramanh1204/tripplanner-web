import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import InspiringSection from './components/InspiringSection';
import CustomerFeedbacks from './components/CustomerFeedbacks';
import TripPlanner from './components/TripPlanner';
// import RecommendedTrips from './components/RecommendedTrips';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <div className="App">
      <Header />
        <Routes>
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