// DIVING DEEEEEP INTO FUNCTIONS




a();
// b(); // TypeError : b is not a function, b is undefined till the code component reaches to 'b' and put the function in place of undefined in the memory component.






// function statement aka function declaration
// function statement is also known as the function declaration.
function a() {
   console.log("a called"); 
}
a();
// this way of creating a function is called function statement. 




// function expression
// function acts as a value putting in a variable. 
var b = function () {
  console.log("b called");
}
b();

// the major difference between function statement and function expression is hoisting.





// Anonymous function
// function without a name is a anonymous function.

// if we create anonymous function like this, it will give us syntax error. It will give us SyntaxError because ecmascript expecting here a name for the function.
// function () { 

// } 

// so thats why anonymous function are the function that used as value in the variable.







// named function expression 
// its almost like a function expression but here the anonymous function have a name.

var c = function xyz() {
  console.log("c called");
  console.log(xyz); // we can access the function inside that function. but can't call it outside.
}
c();

// xyz(); // RefrenceError: Can't find varibale xyz.
// we can used named function expression for recursion.
const factorial = function fact(n) {
  if (n <= 1) {
    return 1; // base case
  }

  return n * fact(n - 1); // recursive call
};

console.log(factorial(5)); //120











// difference between parameters & arguments
function d(param1, param2) { // this param1 and param2 are local variable of the function. you can't access them outside and they are parameters.
  console.log("d called", param1 * param2);
}
d(2,4); // 2 and 4 are arguments.
// When the function is declared, only d is stored in global memory.
// When d(2, 3) is called, a new Function Execution Context is created.
// In its memory creation phase, param1 and param2 are created and initialized to undefined.
// In the execution phase, the passed arguments are assigned:
// param1 = 2
// param2 = 3










// first class function 
// the ability to use function as values and can be passed as an argument to another function and can be returned from the function is known as first class functions.
// we can pass function as a argument. 
// first class citizens 

function e(param1) {
  console.log("e called");
  console.log(param1);
  function def(param1) { // param1 of def is different from param1 of e.
    console.log("def called");
    console.log(param1);
  };
  return def(function ghi() {

  })
}

e(function () {

});

function abc() {
  console.log("abc is called");
}

console.log(e(abc));
















// Arrow Function
// so these function statement, function declaration, function expression can be written as arrow function.
// arrow function come up as a part of es6.
 