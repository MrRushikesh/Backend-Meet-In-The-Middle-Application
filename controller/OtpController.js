require('dotenv').config();

//My Twilio Account SID and Token and PhoneNumber
let TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;
let ACCOUNT_SID = process.env.ACCOUNT_SID;
let AUTH_TOKEN = process.env.AUTH_TOKEN;

const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN, {
    lazyLoading : true,
});


const sendOtp = async (req, res) => {
    const { phoneNumber } = req.body ?? {};
  
    try {
      const result = await client.verify
        .services(TWILIO_SERVICE_SID)
        .verifications
        .create({
          to: `+91${phoneNumber}`,
          channel: "sms",
        });
      res.status(200).send({
        success: true,
        message: `OTP sent successfully`,
        payload: result,
      });
    } catch (err) {
      console.error('Error in sending OTP:', err);
      res.status(500).send({
        success: false,
        message: `Error in sending OTP: ${err.message}`,
      });
    }
};




const verifyOtp = async (req, res) => {
    const { phoneNumber, otp } = req.body ?? {};
  
    try {
      const result = await client.verify
        .services(TWILIO_SERVICE_SID)
        .verificationChecks
        .create({
          to: `+91${phoneNumber}`,
          code: otp,
        });
      res.status(200).send({
        success: true,
        message: `OTP verified successfully`,
        payload: result,
      });
    } catch (err) {
      console.error('Error in verifying OTP:', err);
      res.status(500).send({
        success: false,
        message: `Error in verifying OTP: ${err.message}`,
      });
    }
};

module.exports = {sendOtp, verifyOtp};

