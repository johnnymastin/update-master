// Setup the function here.  
function blob(x, y, callback) {
  var results = x + y;
  // This actually executes the function in the third position below.
  //  function (x+y){console.log(x+y)};
  callback(results);
}


// Call the function here with a callback
blob(2, 3, function (result) {
  console.log(result);
});