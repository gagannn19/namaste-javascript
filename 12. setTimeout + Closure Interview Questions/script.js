// the function inside setTimeout forms a closure and remebers the refrence to the i.
// setTimeout takes the function inside and store it in some place and attaches a timer to it and js proceeds.
// when the timer expires, setTimeout takes that function, put it again in the callstack and run it again.


// function x() {

  // var i = 1;

  // this function doesn't print 1,2,3,4,5 after 1,2,3,4,5 seconds respectively but print 6,6,6,6,6 each after 1 second.
  // this happens because of closure. 
  // if function is executed in some other scope it still remember its lexical environment.
  // when setTimeout store it in some place and attaches the timer, function still remebers the refrence of i, not the value of i but the refrence.
  // when loop runs for the first time, it make a copy of a fucntion attaches a timer and remember the refrence of the i.
  // and then those 5 copy of the function inside setTimeout pointing to the same refrence of i. 
  // loop runs so fast that i value becames 6 then 6 will be print after 1,2,3,4,5 seconds 6 times. 
  // so can we fix this ...
  // we can solve this by using let in place of var. 
  // let has a block scope, thats means the copy of i in each iteration is new.
  // so with let each time 5 different copies of function inside setTimeout pointing to the different refrence of i.

  // for(let i = 1; i<=5; i++) {
  //   setTimeout(function() { // it prints value of i after specific seconds
  //     console.log(i); 
  //   }, i * 1000)
  // }

  // setTimeout(function() { // it prints value of i after specific seconds
  //   console.log(i); 
  // }, i * 1000)
  
  // console.log("Namaste Javascript"); // javascript doesn't wait to finish setTimeout. Js continue to this line of code. 

// }

// x();

// console.log(b);

{
  // console.log(b);
  // let b = 9;
}

// console.log(b);










// what if we want to do it with var only...

function x() {

  for(var i = 1; i<=5; i++) {

    function close(x) { // for doing it with var we can put setTimeout inside a function this will create a new copy of i. 
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }

    close(i);
    
  }
  console.log("Namaste Javascript")
}
x(); 





