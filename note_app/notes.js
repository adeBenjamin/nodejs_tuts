console.log('Staring notes.js');

/*
ARROW FUNCTIONS SYNTAX
function () {
}......................becomes
() => {
}

arrow fucntions dont bind the THIS keyword nor the arguments array
*/


//
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// write a function here that adds two numbers. call it in the app.js file passing two numbers and run app.js on the command line
//
// module.exports.addNum = (a, b) => {
//   console.log ('a ' + '+ ' + 'b');
//   return a + b;
// }


const fs = require('fs');

var addNote = (title, body) => {
  // console.log('Adding note: ', title, body);
  var notes = []; // empty array of notes until a new 'var note' is added
  var note = {
    title, // OR title: title ES5 - identical values. --- title value here = first argument in the addNote var
    body
  }; // the new indvidual note being added

  try {
    // to make sure not to overwrite notes, check the current notes ARRAY for content/string before pushing a new note
    // note this program will crash the first time cos there is no notes-data.son file to check
    // hence INSERT 'dont overwrite code' in a 'TRY CATCH'?
    var notesString = fs.readFileSync('notes-data.json'); // reads the current file, grabs the content and stores it in notesString.
    notes = JSON.parse(notesString); // since notesString is a string, parse it back to JS object in the ARRAY
  } catch (e) {

  }

  // DUPLICATE NOTES
  // to avoid duplicate notes. loop through notes stored in an array, all the notes inside note array in duplicateNotes and using .filter (an array method that takes a callback function (and argument) ) to check for duplicate titles
  // var duplicateNotes = notes.filter((note) => {
  //   return note.title === title; // // this gets called once for every item in the notes ARRAY --- will check each note in the notes ARRAY and return a true or false value to notes.filter which keeps or rejects the note in the NEW duplicateNotes ARRAY --- if note.title != title it will return false and duplicateNotes will be empty for notes.push to do its work.
  // }); // the callback (ARROW) function in .filter can be simplified in ES6 to (note) => note.title === tite; removing the {return ;} leaving the argument on the left and the single line statement on the right
  // it BECOMES:
  var duplicateNotes = notes.filter((note) => note.title === title);

  notes.push(note); // the .push method pushes (note) into the notes array
  // next we need to update the file
  fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // which should create a new file called notes-data and store in it the strigified version of the notes ARRAY (which contains each note object)
};

var getAll = () => {
  console.log('Getting all notes: ');
};

var getNote = (title) => {
  console.log('Getting note: ', title);
};

var removeNote = (title) => {
  console.log('Removing note: ', title);
};

// we have access to a variable inside all node files called module [use console.log(module) to see it] inside module property is an export object.
// module.exports allows us to set properties that we can accss in app.js [in app.js you need require('./notes.js')]
// call the functions above with module.exports.addNote, module.exports.getAll etc... but all in one go with an object like so:

module.exports = {
  addNote: addNote, // the property is addNote, the value is the var addNote ---- in ES6 theres a short cut for identical object property and value so 'addNote' without columns will do
  getAll,
  getNote,
  removeNote
};
