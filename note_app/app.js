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
// console.log('Process: ', process.argv); // without yargs
console.log('Yargs: ', argv); // using yargs (easier and cleaner recognition of arguments)

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('Note title taken. Choose a new title');
  }
} else if (command === 'list') {
  // console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read') {
  // console.log('Reading note');
  var note = notes.getNote(argv.title, argv.body);
  if (note) {
    console.log('Note Found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  // console.log('Removing note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found'; //simple 'ternary operator' used instead of if statement first part is true : false epression on the second part
  console.log(message);
} else {
  console.log('Command not recognised');
}
