 
// we will cover 2 things :- good part of callbacks and bad part of callbacks
// in good part we will see how callbacks are superimportant when writing asynchronous code in js.
// in bad part we will see how using callbacks we can face a lot of issues... 1. callback hell, 2. inversion of control.

console.log("namaste")


setTimeout(function() {
  console.log("javascript");
}, 5000);
// console.log("javascript")

console.log("season 2")



// e-commorece cart work like
// 0. order create
// 1. payment
// 2. order summary page
// 3. update wallet

const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function() {
//   api.proceedToPayment(function() {
//     api.showOrderSummary(function() {
//       api.updateSummary();
//     });
//   });
// });

// when we have a large codebase and there are so many api's here and there and api are dependent on one after the other. so we end up in callback hell.

// Callback Hell is a situation in JavaScript where multiple callbacks are nested inside one another, making the code difficult to read, understand, and maintain. It often looks like a "pyramid" of nested functions and can make error handling more complicated.

// the structure of callback hell also known as pyramid of doom.





// inversion of control
// losing control of code while using callbacks
// giving a control of a function to another function and became dependent on the parent function.