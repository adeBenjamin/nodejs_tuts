console.log('starting app.');

/* use const as in constant not var since we are not maniplating code sent back*/
/*require loads a built-in/3rdparty/or file module u pass one string - require tells fs module name to store all the componenets of the fs module and store it in the fs variable*/

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);
/*
fs.appendFileSync('greetings.txt', 'Hello World!', function (err) {
  if (err) {
    console.log('unable to write to file');
  }
});
*/
