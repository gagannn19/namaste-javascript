function outest() {
  var c = 20;
  function outer(b) {
    var a = 10; // if me make it a let variable, inner function will still form a closure with it.
    function inner() {
      console.log(a,b,c); // prints "helloworld" also because b is also part of outer function and forms a closure with b also.
    }
    return inner
  }
  return outer;
} 

// outer()();
// the upper outer()() is same as
var close = outest()("helloworld");
close();




// data hiding :- we can do data hiding using closure so that we can limit the acces of data.

function counter(){
  var count = 0;
  
  return function increamentCounter() {
    count++;
    console.log(count);
  }

  // return increamentCounter();
}

// console.log(count); // give us error
var counter1 = counter(); // can only access this by this using closure. its like data hiding.
counter1();
counter1();

var counter2 = counter();
counter2(); 
counter2();
counter2();
counter2();
counter2();

