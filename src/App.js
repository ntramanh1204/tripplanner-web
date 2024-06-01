import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import InspiringSection from './components/InspiringSection';
import CustomerFeedbacks from './components/CustomerFeedbacks';
// import RecommendedTrips from './components/RecommendedTrips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <InspiringSection />
      <CustomerFeedbacks />
      {/* <RecommendedTrips /> */}
      <Footer />
    </div>
  );
}

export default App;