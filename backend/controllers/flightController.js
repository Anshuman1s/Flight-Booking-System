
const Flight = require('../models/flightModel');

const getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// get flights by source and destinatio

const getFlightsBySourceAndDestination = async (req, res) => {
    const { source, destination } = req.body;
    console.log(source, destination);

    try {
        const flights = await Flight.find({ from: source, to: destination });
        res.status(200).json(flights);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const addFlight = async (req, res) => {

    const { flightName, from, to, departure, arrival, price } = req.body;


    if  (!flightName || !from || !to || !departure || !arrival || !price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // make a sample flight object

    const sample={
        flightName: 'Indigo',
        from: 'Delhi',
        to: 'Mumbai',
        departure: '2021-09-01T10:00:00.000+00:00',
        arrival: '2021-09-01T12:00:00.000+00:00',
        price: 5000
    }



    try {
        const flight = await Flight.create({ flightName, from, to, departure, arrival, price });
        res.status(201).json(flight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports = {
    getFlights,
    addFlight,
    getFlightsBySourceAndDestination
}