

const express = require('express');
const router = express.Router();

const UserBookingControllers = require('../controllers/userBookingController');


router.post('/bookflight', UserBookingControllers.bookFlight);

router.get('/myflights/:id', UserBookingControllers.myflights);

router.delete('/cancelbooking/:id', UserBookingControllers.cancelBooking);


module.exports = router;