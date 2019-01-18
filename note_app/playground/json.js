//
// // take a JS object and convert to a JSON string
// // take a JSON string convert it back to a JS object so you can access properties

// var obj = {
//   name: 'King'
// };
// // new object stored in the variable obj
// // call a JSON method to send it btw servers save it to a text file or other.
//
// // create a variable to store the result.
// // JSON.stringify takes the object and coverts it to a string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj); // just to check the result is indeed a string using the typeof operator
// console.log(stringObj);
//
// //call node or nodemon json.js in terminal for results
//
//
// // take a string and convert to object
// var personString = '{"name": "King", "age": 32}'; // DOUBLE QUOTES ONLY VALID IN JSON NOT JS
// // to access the data inside the personString we need to convert its string data to an object (so that personString.name is accessible) using the opposite of JSON.stringify we'll use JSON.parse
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


// to READ AND WRITE NOTES

// WRITE note
const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// turn originalNote object into a string using JSON.stringify
var originalNoteString = JSON.stringify(originalNote);
// console.log(typeof originalNoteString);
// console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString); // write file to playground directory


// READ note
// parse the string into JSON.parse to access the title. use fs.readFileSync to GET the string from fs.writeFileSync
var noteString = fs.readFileSync('notes.json'); // creates a file and stores the string
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
