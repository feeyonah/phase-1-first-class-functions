// In your index.js or relevant code file
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {};
  }
  
  function returnsAnAnonymousFunction() {
    return function() {};
  }
  
  