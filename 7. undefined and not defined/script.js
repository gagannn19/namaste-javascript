// undefined is a special keyword in the js. It is not in other languages.
// undefined doesn't mean empty.
// it takes his own memory but we can assume it like a placeholder which is kept for the time being until the variable assigned some other value.
 
// console.log(a); // undefined comes in the console because js puts a placeholder 'undefined' to variable 'a'.
// var a = 7;

// var a = 10; 
// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined" );
// }
// else {
//   console.log("a is not undefined")
// }

//console.log(x); // gives error not defined, it is something that doesn't allocated in the memory.





// javascript is a loosely/weekly typed language
// means it doesn't attaches its variables to any specific data type.

var a;
console.log(a); 
a = 10;
console.log(a);
a = "hello world";
console.log(a); 
// a = undefined; // it is a bad practise because undefined tells us that there is no value assigned to that specific variable. 
console.log(a);