// hoisting :- hoisting is a phenomenon in javascript by which we can access these variables and functions even before you have initilized it. we can access it without any error. 

// getName();
// console.log(x) // it gives us undefined if x is initilzed later in the code

// console.log(getName);  // but unlike x it prints the function



// getName();
// undefined -> exist in memory but not initialized with any value
console.log(x) 

console.log(getName); 

// 
let x = 7; //const


// function getName() {
//   console.log("Namaste Javascript");
// } 

var getName = () => {
  console.log("Namaste Javascript");
}


// console.log(getName); // it prints the function itself