
const mongoose = require('mongoose');


const flightSchema = new mongoose.Schema({
    flightName: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departure: {
        type: Date,
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});


const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

