console.log('Starting app.js');

/* use const as in constant not var since we are not maniplating code sent back*/
/*require loads a built-in/3rdparty/or file module u pass one string - require tells fs module name to store all the componenets of the fs module and store it in the fs variable*/

const fs = require('fs');
const _ = require('lodash');

//node modules I've written
const notes = require('./notes.js');

// argv is an arguments array of arguments passed in via cli. access the arguments via the process object and the argv method (arguments vector)
// console.log(process.argv);

var command = process.argv[2]; // [2] to access the 3rd (0, 1, 2) argument in the array
console.log('Command: ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognised');
}
