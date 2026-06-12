// when js execute this line, it pick up this button "clickMe" and it will add a event listener to it. that event is "click" and what will happen when the event occirs... it will call the callback function.

function attachEventListeners() {
  let count = 0; // we can't use a global variable because then anyone can change it, we hide it using closure.

  document.getElementById("clickMe")
  .addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  }) // Now, the callback function is forming a closure with its outer scope.
}

attachEventListeners();







// garbage collection and remove event listeners

// Event listeners can use memory because the browser keeps the listener function and its closure alive. Even after the function that created the listener has finished, variables like count remain in memory so the listener can access them when the button is clicked later. This happens because of closures.
// thats why we remove eventListener hwne we are not using them.
// because if our webpage have lots of eventListener it makes our page slow. 
// if we remove eventListener then all these variables which are hold by the closure will be garbage collected.



