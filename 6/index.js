// the shortest javascript program is an empty file because js is doing many thing behind the scenes. 

// when we run empty file, still global execution context is created.

// javascript engine also created a global object along with global execution context into the global space.
        // it is a global object with lot of property, method, and other object inside it.
        // we can access all these property and method anywhere in the javascript program.

// just like window, javascript engine also created a 'this' keyword.
        // at global level this 'this' points to the global object.


// so whenever a javascript program runs, global execution context is created, window object is created, this variable is created.

// this global object in case of browser known as window.
// javascript doesn't run only on browser. It runs on server, and other places also.
// whwerever javascript is running there must be a javascript engine there.
// chrome have v8 engine, other browsers have there own engines.
// all engines have a responsibility to create this global object.
// in case of browser it is called window, in case of node it is something else. but a global object is always created.
// even our file is empty js engine will create this global object.
// in global space this 'this' === window
// at global level this 'this' points to the global object which is window.

// global space is any code you write in js which is not insde a function.

var a = 10; // global space
function b() { // global space
  var x = 10; // not a global space
}

// whenever we create any vaiables and functions in the global space, these vriables and functions get attached to the global object.

console.log(window.a);
console.log(a); // if we don't put anythong in front of a then js assumes you are referring to the global space.
//console.log(x); // gives erroe because it tries to find x in global object.
console.log(this.a); // this also pointing to the global object window so it will not gives us error.

// so a js file with no code is the shortest program.