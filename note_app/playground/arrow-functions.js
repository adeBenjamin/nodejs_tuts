// ARROW FUNCTIONS DO NOT BIND THE 'ARGUMENTS' ARRAY/VARIABLE NOR DO THEY BIND THE 'THIS' KEYWORD WHICH ARE BOTH AVAILABLE INSIDE REGULAR FUNCTIONS


// regular functions
var square = function(a) {
  return a * a;
};
console.log(square(10));


// Eg 1
// Arrow function Statement Syntax ES6
var squareS = (x) => {
  var result = x * x;
  return result;
};
console.log(squareS(9));

// Arrow function Expression Syntax (works to simplify if your returning a simple expression)
var squareE = (x) => x * x;
console.log(squareE(4));
// works too without the parenthesis if you have only one argument (x)
// var squareE = x => x * x;      if no arguments you must have the ()



// Eg 2

var user = {
  name: 'King',
  sayHi: () => {
    console.log('Hi');
    console.log(`Hi. I'm ${this.name}`); // Arrow functions do not bind a 'this' keyword - it wont work inside A-functions: undefined
  },
  sayHiAlt () {
    console.log(`Hello. I'm ${this.name}`);
  } // 'this' works here alternative syntax for (functions in object literals) methods on objects note: no column/arrow
};

user.sayHi();
user.sayHiAlt();
