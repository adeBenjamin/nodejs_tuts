
// take a object and convert to a string
var obj = {
  name: 'King'
};
// new object stored in the variable obj
// call a JSON method to send it btw servers save it to a text file or other.

// create a variable to store the result.
// JSON.stringify takes the object and coverts it to a string
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj); // just to check the result is indeed a string using the typeof operator
console.log(stringObj);

//call node json.js in terminal for results


// take a string and convert to object
var personString = '{"name": "King", "age": 32}'; // DOUBLE QUOTES ONLY VALID IN JSON NOT JS
// using the opposite of JSON.stringify we'll use JSON.parse
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
