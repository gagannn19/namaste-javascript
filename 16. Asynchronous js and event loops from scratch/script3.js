// callback queue is also known as task queue

console.log("Start");

// we already know what will happen in this...
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

// now we have a fetch function
// this fetch is again a web api used to make network calls 
// it also register a callback function cbF in the web api environment.
// cbF function is waiting for data to be returned from the server.
// this fetch function basically make a network call to the netflix server.
// and the server return the data back to the fetch().
// after data fetched teh cbF function is ready to be executed.
fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cbF() {
  console.log("CBF Fetch");
});

console.log("End");

// just like a callback queue we also have a microtask queue.
// it is exactly like callback queue but it have higher priority.
// cbF funtion in case of network calls will go the microtask queue.


// what will come in the microtask queue
// all the callback function which cames through promises and mutation observer will go inside this microtask queue.

// there is also a mutation observer
// A built-in browser class used to watch for changes in the DOM.
// We create a MutationObserver object in our code.
// We provide a callback function while creating it.
// When a DOM mutation is detected, the observer queues our callback in the Microtask Queue.
// It does not create or send its own callback automatically.


// when there are many callback in the microtask queue and callback in the callback queue doesn't getting a chance to run for a long time it is called starvation of the callback queue.
// it can happen when the callback of the microtask queue forming more callback in the microtask queue and this loop continues for long time.