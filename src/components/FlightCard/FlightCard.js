import React from 'react';
import './FlightCard.css';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';




const FlightCard = ({ flight }) => {

  

  let navigate = useNavigate();
  const handleBookFlight = async () => {

    try {
      if(localStorage.getItem('user') === null){
        navigate('/login');
      }

      const userid=JSON.parse(localStorage.getItem('user'))._id;
      const response = await axios.post('http://localhost:4000/api/bookflight', {
        flightId: flight._id,
        user: userid
      });
      console.log(response);

      if(response.status === 200){
        alert('Flight Booked Successfully');
      }







    } catch (error) {
      console.error('An error occurred', error);
    }
  }
  return (
    <div className="flight-card">
      <div className="flight-info">
        <p className="flight-number">Flight Number: {flight._id}</p>
        <p className="flight-origin">Source: {flight.from}</p>
        <p className="flight-destination">Destination: {flight.to}</p>
        <p className="flight-date">Departure Date: 
          {format(new Date(flight.departure), "dd/MM/yyyy")}
        </p>
        <p className="flight-date">Arrival Date:
          {format(new Date(flight.arrival), "dd/MM/yyyy")}
         </p>
        <p className="flight-fare">Fare: ₹{flight.price}</p>
      </div>
      <button className="book-button" onClick={handleBookFlight}>Book  ₹{flight.flightFare}</button>
    </div>
  );
};

export default FlightCard;
