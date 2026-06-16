function cb() {
  console.log("Callback");
}

setTimeout(cb, 5000);

// setTimeout does not wait always exactly for 5 seconds.
// it all depend on call stack.

// concurrency model in javascript
// Concurrency means: Handling multiple tasks during the same period of time.
// JavaScript is single-threaded, but achieves concurrency using Web APIs, Queues, and the Event Loop, allowing asynchronous tasks to run without blocking the main thread.

// lets suppose if we have a setTimeout for 5 seconds and our code is so long that it takes 10 seconds to finish.
// so the code is blocking callstack for 10 seconds and for that 10 seconds no callback queue or microtask queue is implemented.
// so thats why setTimeout does not wait always exactly for 5 seconds, it have trust issues.

console.log("start");

// if the timer here is. 0, the function have to go through the queue.
setTimeout(function cb2() {
  console.log("calbback 2");
}, 5000);

console.log("end"); 

// million

let startDate = new Date().getTime();
let endDate = startDate;

// this while loop takes 10 seconds to expire and blocking callstack for 10 seconds.
while(endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");

// The main thread is the single thread where JavaScript code runs.
// Inside the main thread, the Call Stack keeps track of which function is currently executing.

// thats why as a developer we should always remember to not block our main thread so the callback queue also gets chance to implement itself.