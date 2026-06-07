// scope and javascript is directly realted to lexical environment.
// whenever a execution context is created a lexical environment is also created.
// lexical environment is the local memory along with the lexical environment of its parent. 
// lexical as a term means in hierarchy or in a sequence.
// the c function is lexically sitting inside a function.
// along with the variables and functions in the memory space  we also get refrence to the lexical environment to the parent.
// lexical environment of global execution context points to the null.

//  A scope chain is just a chain of lexical environments that JavaScript uses to find variables.

function a() {
  var b = 9;
  //console.log(b); // first js engine finds b in a's execution context. 
  c();
  function c() {
    console.log(b);
  }
}

a();
//  console.log(b); // it gives error that b is not defined, if we assigned b inside function a or c.
// var b = 10;
// a(); 