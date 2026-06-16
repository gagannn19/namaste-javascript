// javascript is everywhere. it can run inside browser, server, watches, robots , etc...
// it all possible because of javascript runtime environment.

// js runtime environment is like a big container, whic has all the things required to run the js code.

// you need js engine to run a js code. 
// js runtime environemnt has js engine, set of API's to connect it to outer environment, we have a event loop also, a callback queue, a microtask queue.

// js engine is the heart of js runtime environment.

// every browser can only execute our js code because it have js runtime environmnet.
// we also heard node.js ... it is also a js runtime environment that runs js on servers.

// API's can be different or can be same according to where we are running the js.
// sometime API's name can be same but internally there working can be different.
// setTimeout in browser can be different internally from setTimeout of node

// mmicrosoft edge have js engine called chakra, mozilla firefox have spidermoneky , google chrome, node.js have v8

// we can create our own js engine as well.
// important protocol for js engine is that following the ecmascript language standards.
// ecmascipt has a governing body for js. 

// spidermonkey is the first js engine ever created by the js developer himself. 







// ................................




// javascript engine architecture

// js engine is not a machine. 
// /it is not a hardware but a program which is written in low level language.
// like google v8 engine is written inside c++.

// javascript takes the human readable code as input. 
// this code is goes through 3 major steps
// 1. parsing --> 2. complilation --> 3. execution

// during the parsing phase our code is broken down into tokens.
// token is teh smallest unit of code, like ... let a = 10 ... let, a, = , 10 are all tokens.
// there is also known as syntax parser, it takes the code and convert it into AST(Abstract Syntax Tree).

// the compilation and execution go hand in hand
// so javascript have JIT(Just In Time ) Compilation 

// Interpretter
// In many interpretted programming languages, the code is executed using interpretted programming languages.
// It takes your code and start executing the code  line by line, it doesn't knwo what will happen in the next line.

// Compiler
// Many languages uses compiler to compile there code.
// In case of compiler, your whole code is compiled first of all before execution.
// then the new code is formed which is the optimized version of the code and then  it is executed which runs very fast and have lot of performance improvement.

// PROS AND CONS OF BOTH Interpretter AND Compiler
// Interpretter is fast, it doesn't wait for the code to be compiled first. 
// Compiler have more efficiency

// javascript can behave like interpretted language as well as compiled language, everything is dependent on the javascript engine.

// when js is created by brandon eich, it was supposed to be an interpretted language. 
// nowadays a js engine use both interpretter and compiler both and modern  browser also supports that.
// now it depends on the js engine that it should be purely interpretted or JIT Compiled. 
// js use both thats why it called JIT Compiled language. 

// compilation and execution go hand in hand...
// after parsing we got the AST, AST goes to the interpretter.
// Interpretter convert our high level code to byte code and then teh code moves to the execution steps.
//  while it is doing so, it takes the help of the compiler to optimize the code as much as compiler can.

// all js engine have its own algorithm of doing it.

// so the work of the compiler is to optimize the code as much as it can on the run time.
// Thats why it is called Just in Time compilation.

// In some js engine there is AOT(Ahead of Time) Compilation. 
// In this the compiler takes the piece of code which is going to be executed later and tries to optimize it as much as it can.
// It also created the byte code which then goes to the execution phase.

// the execution phase isn't possible without two major components of teh js engine.
// those 2 components are the memory heap and teh callstack.

// the whole javascript runtime environment have a js engine and that engine have a callstack inside it.

// memory heap is teh place where all the memory istored.
// it is always in sync with the callstack, garbage collector and many other things.

// garbage collector tries to free up memeory space whenever possible.
// it uses and algoithm mark & sweep.


// ...........................................

// Mark & Sweep (JS Garbage Collector)
// Mark: Mark all objects that are still accessible (in use).
// Sweep: Delete all objects that are no longer accessible.

// Example:

// let user = { name: "John" };
// user = null;

// After user = null, the object { name: "John" } is unreachable.

// Mark: ❌ Object not marked
// Sweep: 🗑️ Object deleted

// Summary:

// Reachable = Keep ✅
// Unreachable = Delete 🗑️

// .............................................



// there are other forms of optimization which a compiler does for the code like inlining, copy elision, inline caching and lot of other things.

// there are different types of js engine with many differences among them.
// google's v8 engine is considered best of all in currect time.
// v8 engine interpretor name is ignition and turbo fan is optimizing compiler in it.





// there are few languages which are procedural programming languages, few are functional programming languages and few are oobject oriented programming languages.
// but we can use js in any paradimes.