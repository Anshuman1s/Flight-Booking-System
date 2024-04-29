const UserBooking = require('../models/userBookingModel');  
const mongoose = require('mongoose');



const bookFlight = async (req, res) => {
    try {
        const { flightId,user } = req.body;

        const booking = await UserBooking.create({ flight: flightId, user });
        res.status(201).json({ booking });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const myflights = async (req, res) => {
    try {
        const user = req.params.id;
        const flights = await UserBooking.find({ user }).populate('flight');
        res.status(200).json({ flights });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const cancelBooking = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid  id");
        const booking = await UserBooking.findById(id);
        if (!booking) throw new Error("Booking not found");
        await UserBooking.findByIdAndDelete(id);
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }


}




module.exports = {
    bookFlight,
    myflights,
    cancelBooking
}