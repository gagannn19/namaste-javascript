const radius = [3,1,2,4];

const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumference = function(radius) {
  return 2 * Math.PI * radius;
}

const diameter = function(radius) {
  return 2 * radius;
}

const calculate = function (radius, logic) {
  const output = [];
  for(let i = 0; i<radius.length; i++) {
    output.push(logic(radius[i])); 
  }
  return output;
}; 

// both giving same result, map and calculate function are almost similar
console.log(calculate(radius,area));
console.log(radius.map(area));


console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// here we abstracted our code in smaller functions.
// each function have its own responsibilities.

// so this is the functional programming.
// here we think of logic as small reusable functions.

// functional programming has reusability, modularity  

// calculate is a higher order function.
// area, circumference, diameter are callback functions.
