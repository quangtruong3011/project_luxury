import React, { useState } from 'react';
import "./RoomDetailForm.css";

function RoomDetailForm() {
  const [arriveDate, setArriveDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const price = '260';
  const handleArriveDateChange = (e) => {
    setArriveDate(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleAdultsChange = (e) => {  
    setAdults(e.target.value);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };

  const handleBookNowClick = () => {
    // Lưu thông tin vào localStorage
    localStorage.setItem('arriveDate', arriveDate);
    localStorage.setItem('departureDate', departureDate);
    localStorage.setItem('adults', adults);
    localStorage.setItem('children', children);
    localStorage.setItem(price, price);

    // Chuyển sang trang checkout
    window.location.href = '/checkout';
  };

  return (
    <div className="room-detail">
      <div className="form-group">
        <label htmlFor="arriveDate">Arrive Date:</label>
        <input
          type="date"
          id="arriveDate"
          value={arriveDate}
          onChange={handleArriveDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={handleDepartureDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={handleAdultsChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={handleChildrenChange}
        />
      </div>
      <button className='booking' onClick={handleBookNowClick}>Book Now</button>
    </div>
  );
}

export default RoomDetailForm;
