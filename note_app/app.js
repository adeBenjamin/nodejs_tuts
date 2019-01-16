console.log('Starting app.js');

/* use const as in constant not var since we are not maniplating code sent back*/
/*require loads a built-in/3rdparty/or file module u pass one string - require tells fs module name to store all the componenets of the fs module and store it in the fs variable*/

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var add = notes.addNum(3, 6);
// console.log(add);
// how i did it above, how he did it below

console.log('Result: ', notes.addNum(9, -2))


// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
//
// // template strings (left of the 1 key on keyboard) `` type things as normal which allows js variable with ${} ES6 feature
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${32}`, function (err) {
//   if (err) {
//     console.log('unable to write to file');
//   }
// });
