import React from 'react';
import HotelList from '../HotelList';

const HotelPage = () => {
  return (
    <div className="container mt-4">
      <h1>Available Hotels</h1>
      <HotelList />
    </div>
  );
};

export default HotelPage;
