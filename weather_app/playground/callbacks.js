// setTimeout takes 2 args
// setTimeout(callback_fn, delay);

var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'King'
  };
  
  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(32, (userObject) => {
  console.log(userObject);
}); // remember getUser req 2 args: id and callback fn
