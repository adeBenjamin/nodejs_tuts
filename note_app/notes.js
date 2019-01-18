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




var addNote = (title, body) => {
  // console.log('Adding note: ', title, body);
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
