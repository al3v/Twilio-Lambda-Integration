exports.handler = (event, context, callback) => {
  // Your Account SID from www.twilio.com/console
  const accountSid = process.env.ACCOUNT_SID;
  
  // Your Auth Token from www.twilio.com/console
  const authToken = process.env.AUTH_TOKEN;
  
  // Import Twilio's Node Helper library
  // Create an authenticated Twilio Client instance
  const client = require('twilio')(accountSid, authToken);
  
  // Make a phone call
  client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+111111111111', // your phone number
    from: '+2222222222' // a valid Twilio number
  })
  .then((call) => {
    // Success, return call SID
    callback(null, call.sid);
  })
  .catch((e) => {
    // Error, return error object
    callback(Error(e));
  });
};
