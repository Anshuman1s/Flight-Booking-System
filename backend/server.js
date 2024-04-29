const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app = express();
const port = 4000;
const userRoutes = require('./routes/user');
const flightRoutes = require('./routes/flights');
const bookingRoutes=require('./routes/booking');



app.use(cors(
  {
    origin: 'http://localhost:3000',
    
  }
));

app.use(express.json());


app.use('/api', userRoutes);
app.use('/api', flightRoutes);
app.use('/api', bookingRoutes);




mongoose.connect('mongodb://localhost:27017/airport')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database: ', error);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

