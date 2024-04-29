
const mongoose = require('mongoose');

const userBookingSchema = new mongoose.Schema({
    flight:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    
        
    }

});


const UserBooking = mongoose.model('UserBooking', userBookingSchema);


module.exports = UserBooking;
