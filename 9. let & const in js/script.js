// let & const declarations are hoisted.
// but they are hoisted differently than var declaration.
// let and const are in the temporal dead zone in the time being.
// let and const also allocated memory like var but they are stored in a different memory space than global object.
// you cannot acces these let and const variable till you put some value in them. 

// temporal dead zone is the time since then this let variable is hoisted and till it is initilized some value.
// before the line varible assigned with a value is the temporal dead zone.

// there is a different error for the temporal dead zone.
// if varibale x is not in our code then the error is ReferenceError: x is not defined.
// but if we try to console.log(a) before assigning it a value and a is declared with let then error is ReferenceError: Cannot access 'a' before initialization.

// variable assigned with let,const didn't get attached to the window object they are stored in a seperate storage.
// window.a //undefined
// this.a // undefined 
// window.x // undefined ... x is not in the program
// so it treated let with no value and x that is not in the program with same 'undefined'.

// we also can't redeclare let. it gives us a SyntaxError
// it doesn't run a single line of code and just gives us error.
// we also can't declare same variable name with different let and var. let a = 10, var a = 10, is not possible

// const behave very much similar to the let but there is a difference.
// even more strict than let.
// it also stored in seperate memory and also have temporal dead zone.
// we have to initilize it with a value in the time of declaration.



// TypeError : Assignment to the constant variable. When we try to assign a value later again to the const it gives us error because we only assign value to the const only one time at the time of declaration. 
// SyntaxError comes when e=we miss syntax. like const a; ... it gives us SyntaxError because it expecting const a = 10(some value);
// let a = 10; let a = 1000; ... gives SyntaxError
// RefrenceError ... when js engine tries to find out a specific variable inside the variable space and you cannot access it.
// console.log(a); let a = 10 ... gives us RefrenceError
// console.log(y) ... also gives us RefrenceError, because y is not in the code.




// when you don't want to change the value to a specific variable use const.
// and to make work simple and didn't want undefined and all then use let.
//  use const and let or use var but consiously.


// to avoid error through temporal dead zone always declare and initilize your variable on the top.
// by doing that we are shrinking the temporal dead zone window to 0.
// 




// console.log(b); 
// console.log(a);
// console.log(x);

let a = 10;
// console.log(a); 
var b = 100;