const express = require('express')
const router = express.Router();
const {sendOtp, verifyOtp} = require('../controller/OtpController');



router.post('/sendotp', sendOtp);
// http://localhost:5000/api/otp/sendotp
// BODY -> row -> JSON
// {
//     "phoneNumber" : "7447640893"
// }

router.post('/verifyotp',verifyOtp);
// http://localhost:5000/api/otp/verifyotp
// BODY -> row -> JSON
// {
//     "phoneNumber" : "7447640893",
//     "userEnteredOTP" : "8486"
// }


module.exports = router;