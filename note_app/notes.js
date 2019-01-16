console.log('Staring notes.js');

/*
ARROW FUNCTIONS SYNTAX
function () {
}......................becomes
() => {
}

arrow fucntions dont bind the this keyword nor the arguments array
*/

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

// write a function here that adds two numbers. call it in the app.js file passing two numbers and run app.js on the command line
//
// module.exports.addNum = (a, b) => {
//   console.log ('a ' + '+ ' + 'b');
//   return a + b;
// }
