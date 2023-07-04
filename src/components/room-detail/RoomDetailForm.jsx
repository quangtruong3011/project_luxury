import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./RoomDetailForm.css";

function RoomDetailForm() {
  const [formData, setFormData] = useState({
    arriveDate: "",
    departureDate: "",
    adults: 0,
    children: 0,
    price: 260,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const navigate = useNavigate();

  // const [arriveDate, setArriveDate] = useState('');
  // const [departureDate, setDepartureDate] = useState('');
  // const [adults, setAdults] = useState(0);
  // const [children, setChildren] = useState(0);
  // const price = '260';
  // const handleArriveDateChange = (e) => {
  //   setArriveDate(e.target.value);
  // };

  // const handleDepartureDateChange = (e) => {
  //   setDepartureDate(e.target.value);
  // };

  // const handleAdultsChange = (e) => {  
  //   setAdults(e.target.value);
  // };

  // const handleChildrenChange = (e) => {
  //   setChildren(e.target.value);
  // };

  const saveFormDataToJson = () => {
    localStorage.setItem("reserveDetails", JSON.stringify(formData));
  };

  const handleBookNowClick = () => {
    // Lưu thông tin vào localStorage
    saveFormDataToJson(formData)

    // Chuyển sang trang checkout
    navigate('/checkout');
  };

  return (
    <div className="room-detail">
      <div className="form-group">
        <label htmlFor="arriveDate">Arrive Date:</label>
        <input
          type="date"
          id="arriveDate"
          // value={arriveDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          // value={departureDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          // value={adults}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          // value={children}
          onChange={handleChange}
        />
      </div>
      <button className='booking' onClick={handleBookNowClick}>Book Now</button>
    </div>
  );
}

export default RoomDetailForm;
