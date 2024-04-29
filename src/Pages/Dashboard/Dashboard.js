import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import './Dashboard.css';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/FlightCard/Navbar/Navbar';

const Dashboard = () => {
  const [bookedFlights, setBookedFlights] = useState([
  ]);
  const [loading, setLoading] = useState(false);

  const fetchBookedFlights = async () => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'))._id;
      const response = await axios.get(`http://localhost:4000/api/myflights/${user}`);
      console.log(response.data.flights);
      setBookedFlights(response.data.flights);
      setLoading(false);
      
    } catch (error) {
      console.error('An error occurred', error);
      setLoading(false);
      
    }

  }

  useEffect(() => {
    fetchBookedFlights();
  }, []);




  return (

    <>
      {loading && <Loading />}
      {!loading &&
        <>
          <div className="dashboard-container">
            <Navbar />

            <h2 className="dashboard-title">My Booked Flights</h2>
            <div className="booking-cards-container">
              {bookedFlights.map((booking) => { return (<BookingCard booking={booking} />) })}
            </div>
          </div></>
      }
    </>

  );
};

export default Dashboard;
