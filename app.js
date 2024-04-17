const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;

const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');



const app = express();

//middleware 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())


//Connect Database; 

dbConnection();


app.get('/',(req,res) => {
    res.send("<h1>Hello World...</h1>");
    res.end();
})

// POST -: http://localhost:5000/api/auth/signup
// POST -: http://localhost:5000/api/auth/signin
app.use('/api/auth',authRoutes);

// POST -: http://localhost:5000/api/otp/sendotp
// POST -: http://localhost:5000/api/otp/verifyotp
app.use('/api/otp',otpRoutes);



app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})