console.log('Starting app.js');

/* use const as in constant not var since we are not maniplating code sent back*/
/*require loads a built-in/3rdparty/or file module u pass one string - require tells fs module name to store all the componenets of the fs module and store it in the fs variable*/

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//node modules I've written
  const notes = require('./notes.js');

// argv is an arguments array of arguments passed in via cli. access the arguments via the process object and the argv method (arguments vector) so i can call on the cli:
// $ node app.js add --title=filenamehere --body="body content here"

// console.log(process.argv);

const argv = yargs.argv; // yargs.argv is where yargs library stores the arguments that the app runs with
// var command = process.argv[2]; // [2] to access the 3rd (0, 1, 2) argument in the array using process.
var command = argv._[0]; // using yargs to grab the first argument in the array
console.log('Command Used: ', command);
console.log('Process: ', process.argv); // without yargs
console.log('Yargs: ', argv); // using yargs (easier and cleaner recognition of arguments)

if (command === 'add') {
  // console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  // console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read') {
  // console.log('Reading note');
  notes.getNote(argv.title);
} else if (command === 'remove') {
  // console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognised');
}
