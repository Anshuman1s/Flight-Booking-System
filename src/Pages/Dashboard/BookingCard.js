// BookingCard.js
import React from 'react';
import './BookingCard.css'; // Import the BookingCard.css file for styles
import { format } from "date-fns";
import axios from 'axios';


const BookingCard = (props) => {

  console.log("props:", props);
  // const { id, departureCity, arrivalCity, departureDate, passengers } = booking;


  const handleCancel = async () => {
    try {
      // Send the form data to the backend using Axios
      console.log(props.booking._id);
      const response = await axios.delete('http://localhost:4000/api/cancelbooking/' + props.booking._id);
      console.log(response);
      if (response.status === 200) {
        alert('Booking Cancelled Successfully');
        window.location.reload();
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  }


  return (
    <div className="booking-card">
      <h3>Booking ID: {props.booking._id}</h3>
      <p>Departure: {props.booking.flight.from}</p>
      <p>Destination: {props.booking.flight.to}</p>
      <p>Departure Date:
        {format(new Date(props.booking.flight.departure), "dd/MM/yyyy")}
      </p>
      <button className="cancel-button"
        onClick={handleCancel}

      >Cancel</button>
    </div>

  );
};

export default BookingCard;
