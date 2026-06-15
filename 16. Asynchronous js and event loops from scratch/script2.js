console.log("start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});

console.log("end");

// this .addEventListener() is another super power which is given by the browser to the js engine through the window object in form of a web api which is the dom api.

// whenever you do something like document. it basically calling this dom api which fetches something from the DOM.
// DOM is the Document Object Model which is the html source code.
// .addEventListener register a callback on an event that event is "click".

// when the whole program is executed and global execution context also disappear from callstack but the event handler stays in the web api's environment untill we explicitly remove the eventlistener or we close the browser.







// EVENT LOOP

// event loop has just one job to continously monitoring the call stack and the callback queue.
// The Event Loop does not move a callback from the Callback Queue to the Call Stack until the Call Stack is empty.

// why we need a callback queue, why can't we just put the callback function in the callstack.

