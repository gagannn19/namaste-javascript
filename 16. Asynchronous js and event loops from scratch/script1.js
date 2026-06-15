// if anything enters the callstack it execute it instantly.
// but what if we want to run a code after 5 seconds.
// no, because callsatck doesn't have timer.
// so how can we get that super power of timers.

// callstack is inside the javascript engine and javascript engine is in the browser.
// browser also have local storage, it can store some data inside it.
// we also have timer inside the browser.
// we also have url inside the browser by which we can connect to the servers.
// from server it can take data and show it in the screen.
// to access all these super powers we need web api's

// api's like setTimeout()... it is not a part of js.
// api's like DOM API's ... it's also not a part of js
// and api's like fetch(), localStorage, console, location are all not a part of js, they are the part of browser.

// so browser gives all these powers to js engine so he can use it. 

// and we get these api's in callstack because of the global object.
// browser give js engine the facility to use all these super powers through a keyword known as window.
// window is the global object.

// so if we want the superpower of timer in our js code ... so we have to do window.setTimeout(), it will give js engine access to the timer.
// if we do window.localStorage, browser give access to the localStorage.
// that's how we take access to these super powers.

// because window is a global object , we don't need to write window.setTimeout, we can use it by just setTimeout() in our code.

// browser kind of wraps up all these api's into a global object window and give access of this window to callstack.


console.log("Start"); // console api is used here. console.api is plugged through window to your code.

// this setTimeout will go and call web api and then that api give us timer feature of web browser.
// and it takes a callback function and some delay.  
// then setTimeout() api register a callback and also strat the delay 5000 inside the tiemr.
setTimeout(function cb() { 
  console.log("Callback");
}, 5000);

console.log("End");

// here the program ends and global execution context also disappear from the callstack but the timer is still running.
// as soon as the timer expire then the callback method neeeds to go into the call stack.
// but it doesn't go directly to the call stack.
// it goes to the callstack through the call back queue.
// when the timer expire callback functionnmoves into the callback queue.
// event loop acts like a gateway and  checks the callback queue, if there is some function in the queue, event loop puts the function into the callstack.
// then the callstack quickly execute the callback function.






