const request = require('request');
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default

const yargs = require('yargs'); // you know what it do: command line user input

//object that stores the final parsed output. takes the input from the process variable, passes it through yargs and voila!
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'to fetch weather for',
      string: true // tells yargs to parse a as a string
    }
  })
  .help()
  .alias('help', 'h') // sets an alias h for the help option
  .argv;

console.log(argv); // shows the argv obejct, there you can select argv.a or .address to get the address typed in on the command line like so:
var encAddress = encodeURIComponent(`${argv.address}`);


request({
  url:
  `http://www.mapquestapi.com/geocoding/v1/address?key=fwcGcGm6WmVmVzoe5ylM8V9I0pLLoEU5&location=${encAddress}`
  /*
  'http://www.mapquestapi.com/geocoding/v1/address?key=fwcGcGm6WmVmVzoe5ylM8V9I0pLLoEU5&location=1301%20lombard%20street%20philadelphia'
  */,
  json: true //tells request that the data coming back is json data and it should convert the incoming json string to an object
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2)); // pretty print the JSON data from the map api using JSON.stringigfy      change: body to repsonse or error to see what it prints out

  console.log(`Address: ${body.results[0].providedLocation.location}`);

  console.log(`Address: ${body.results[0].locations[0].street}, ${body.results[0].locations[0].adminArea5}, ${body.results[0].locations[0].adminArea3}, ${body.results[0].locations[0].postalCode}, ${body.results[0].locations[0].adminArea1}`);

  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});
