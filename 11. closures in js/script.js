// closure is a function bind together with its lexical environment.
// function along with its lexical scope forms a closure.
// you can save function in the variable in js and also can pass function as a parameter in js and also return a function.

// function x() {
//   var a = 7;

//   // return function y() { // we can return a function like this also
//   //   console.log(a);
//   // }

//   // y()

//   function y() {
//     console.log(a); 
//   }
//   a = 100;  
//   return y;
// }
// var z = x();
// console.log(z);

// ....

//z(); // when function returned from another function they still maintains there lexical scope thats why it gives us 7 as output



// y forms the closure along with scope of x and scope of z 

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      debugger;
      console.log(a,b );
    }
    y();
  }
  x();
}
z();


// uses of closure :-
//      - module design pattern
//      - currying
//      - function like once
//      - memoize
//      - maintaining state in async world
//      - setTimeouts
//      - Iterators
//      - and many more...