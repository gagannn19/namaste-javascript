{
  // block is defined by these curly brackets.
  // block is also known as compound statement.
  // block is used to combine multiple javascript statement into a group.
  // like this

  // var a = 10;
  // console.log(a);

  // why we need to group these statements ?
  // because so we can use it where javascript expects one statement.
}

// if (true)    // ... this alone gives us error because if expects a staement here.
// but if you want to write multiple statemnets you can only do that by grouping them together.

// if(true) {
//   var a = 10;
//   console.log(a);
// }

// we also use this block in while loop, for loop, functions also 




// what is block scope ?
// block scope means what all variables and fucntions access inside this block.

// var a = 100; // if we have same variable in and outside the block then the varibale that is indie shadows the variable that is inside.

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);  // RefrenceError comes on this line.
// console.log(c);

// b and c got there seperate memory. and hoisted as undefined in block scope and a is in global scope as undefined before the program starts running.
// we cannot access these let and const outside this block but can acces var because it is in the global scope.





// what is shadowing in js?

// var a = 100;
// let b = 100;
// const c = 100;

// {
//   var a = 10;
//   let b = 20; 
//   const c = 30;
//   console.log(a);
//   console.log(b); // gives 20 as output because the b inside the scope is shadowing the b outside the scope.
//   console.log(c);
// }

// console.log(a); // it gives output as 10 becuase var inside the scope doesn't have its seprate sapce and it also stored in the global scope and changes the previous value from 100 to 10.
// console.log(b); // it gives us 100 ... becuase both b have different scope and have seperate space other than global scope.
// console.log(c); // it works the same way as let







//  illegal shadowing


// can't do this 
// let a = 20;
// {
//   var a = 20; // because var is a function scope...
// }

// block scope also follows lexical scope
// it follows lexical scope chain pattern 
const a = 20;
{
  const a = 100;
  {
    // const a = 200;
    console.log(a);
  }
  console.log(a);
}
console.log(a);

// all the scope rules for functions are exactly same as the arrow function also.