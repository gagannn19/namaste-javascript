// one of the most amazing part of js is functional programming.
// it is not possible without higher order functions.

// a function that takes function as an argument or return a function from it is known as higher order functions.

// x is the callback function 
function x() {
  console.log("Namaste"); 
}

// y is an higher order function here.
function y(x) { 
  x();
}




// .......................................

const radius = [3,1,2,4];


// calculate area

const calculateArea = function (radius) {
  const output = [];
  for(let i = 0; i<radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]); 
  }
  return output;
};

console.log(calculateArea(radius));


// calculating circumference

const calculateCircumference = function (radius) {
  const output = [];
  for(let i = 0; i<radius.length; i++) {
    output.push(2 * Math.PI * radius[i]); 
  }
  return output;
};

console.log(calculateCircumference(radius));



// calculate diameter

const calculateDiameter = function (radius) {
  const output = [];
  for(let i = 0; i<radius.length; i++) {
    output.push(2 * radius[i]); 
  }
  return output;
};

console.log(calculateDiameter(radius));


// in all three cases above we are repeating, and voilating DRY(DON'T REPEAT YOURSELF) Principle.
// can we write it in optimized manner ?