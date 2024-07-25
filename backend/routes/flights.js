
const express = require('express');
const router = express.Router();

const FlightControllers = require('../controllers/flightController');

// get all flights

// router.get('/flights', FlightControllers.getFlights);

// get flights by source and destination

router.post('/flights', FlightControllers.getFlightsBySourceAndDestination);

// add a flight by clicking on add

router.post('/addflights', FlightControllers.addFlight);

//exported the model
module.exports = router;
