// what is the callback function in javascript?

// functions are first class citizens in javascript, that means we can take a function and pass it to another function, function that we passed is known as callback function. 
// But this callback functions are very powerful in javascript. It gives us accsess to the whole asynchronous world in a synchronous single threaded language.
// Javascript is a single threaded synchronous language but due to callbacks we can do async things in javacript.

setTimeout (function () {
  // debugger;
  console.log("timer");
}, 5000) // the function inside setTimeout is a callback function. 

function x(y) {
  // debugger;
  console.log("x");
  y();
}

x(function y() { 
  // debugger;
  console.log("y");
  debugger;
});

// this function y is called callback function.
// now function x can only call the function y later thats why it is called callback function.

// javascript only have one callstack, you can also say it main thread.
// everything will be executed through the call stack.
// so if any operation locks this call stack, that means blocking the main thread.

// suppose a operation or function takes too much time and there is only one callsatck in js , that process will block the call stack.
// we should never block the call stack.
// thats why we used async code to avoid the blocking of thread.

// so, if js doesn't have first class function and callback functions and we could not passed these functions into another functions we can't able to do asynchronous operations.

// using these web api, setTimeout and the callback functions we achieve these asynchronous operations.

