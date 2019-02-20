const request = require('request');
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=fwcGcGm6WmVmVzoe5ylM8V9I0pLLoEU5&location=1301%20lombard%20street%20philadelphia',
  json: true //tells request that the data coming back is json data and it should convert the incoming json string to an object
}, (error, response, body) => {
  console.log(body);
});
