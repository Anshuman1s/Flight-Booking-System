import React, { useState } from 'react';
import FlightCard from '../../components/FlightCard/FlightCard';
import "./UserBooking.css";
import axios from 'axios';
import Navbar from '../../components/FlightCard/Navbar/Navbar';
import Loading from '../../components/Loading/Loading';

const AirportApp = () => {
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [flights, setFlights] = useState([
    // {
    //   _id: '1',
    //   flightOrigin: 'Lagos',
    //   flightDestination: 'Abuja',
    //   flightStartDate: '2022-01-01',
    // },
    // {
    //   _id: '2',
    //   flightOrigin: 'Lagos',
    //   flightDestination: 'Abuja',
    //   flightStartDate: '2022-01-01',
    // }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSourceCityChange = (event) => {
    setSourceCity(event.target.value);
  };

  const handleDestinationCityChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend using Axios

        if (sourceCity === '' || destinationCity === '' || travelDate === '') {
          console.error('All fields are required');
          return;
        }

        console.log(sourceCity, destinationCity, travelDate);

      setLoading(true);
      const response = await axios.post('http://localhost:4000/api/flights', {
        source: sourceCity,
        destination: destinationCity,
      });

      setLoading(false);
      console.log(response.data);
      setFlights(response.data);
    }
    catch (error) {
      console.error('Error:', error.response.data);
    }
  };



  return (
    <div>
      <Navbar />

      <div className="container">

        <h2>Airport Application</h2>
        <form onSubmit={handleSubmit} className="form-section">
          <div>
            <label htmlFor="sourceCity">Source City:</label>
            <input
              type="text"
              id="sourceCity"
              value={sourceCity}
              onChange={handleSourceCityChange}
            />
          </div>
          <div>
            <label htmlFor="destinationCity">Destination City:</label>
            <input
              type="text"
              id="destinationCity"
              value={destinationCity}
              onChange={handleDestinationCityChange}
            />
          </div>
          <div>
            <label htmlFor="travelDate">Travel Date:</label>
            <input
              type="date"
              id="travelDate"
              value={travelDate}
              onChange={handleTravelDateChange}
            />
          </div>
          <button type="submit">Search Flights</button>
        </form>

        {loading && <Loading />}

        <div className="section">
          <h2>Available Flights</h2>

          {
            flights.length === 0 && <p>No flights available</p>
          }
          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportApp;
