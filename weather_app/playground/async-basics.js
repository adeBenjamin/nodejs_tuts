console.log('Starting App');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000); // runs last after second timeout

setTimeout(() => {
  console.log('Second timeout with no time');
}, 0); // will run after finishing up

console.log('finishing App');
