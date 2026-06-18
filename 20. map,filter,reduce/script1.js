// map, filter, reduce are higher order functions in javascript...

const arr = [5,1,3,2,6];

// map :- For every user in the array, do something and save the result in a new array

// double - [10,2,6,4,12]

// triple - [15,3,9,6,18]

// binary - ["101","1","11","10","110"]

function double(x) {
  return x*2;
}

function triple(x) {
  return x*3;
}

function binary(x) {
  return x.toString(2);
}

// this is arrow function same as normal function
// we can remove return also if we have just one line in our function and directly write what we want to return
const output = arr.map((x) => x.toString(2));

// const output = arr.map(function binary(x) {
//   return x.toString(2);
// });

console.log(output);




// .....................

// filter function is basically used to do filter the value inside an array.

// filter odd values from arr
function isOdd(x) {
  return x%2;
}

const output2 = arr.filter(isOdd);
console.log(output2);

// we can directly write the function inside filter function also.
const output3 = arr.filter(function greaterThan4(x) {
  return x > 4;
});
console.log(output3);

// more short form of filter function
const output4 = arr.filter((x) => x>4);
console.log(output4);

// ..........................................






// reduce
// reduce used where you take all the value of an array and come up with a single value out of them.

// sum of array

function findSum(arr) {
  let sum = 0;

  for(let i = 0; i<arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));



const output5 = arr.reduce(function(acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output5 );



// max in array

function findMax(arr) {
  let max = 0;
  for(let i = 0; i<arr.length; i++) {
      if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));



const output6 = arr.reduce(function(acc, curr) {
  curr > acc;
  return curr;
}, 0)
console.log(output6);








const users = [
  {firstName:"akshay", lastName:"sainy", age:27},
  {firstName:"gagan", lastName:"sharma", age:26},
  {firstName:"elon", lastName:"musk", age:44},
  {firstName:"narendra", lastName:"modi", age:27}
];

// list of full name

function fullName(list) {
  let newList = [];
  for(let i = 0; i<list.length; i++) {
    let full = list[i].firstName + " " + list[i].lastName;
    newList.push(full);
  }
  return newList;
}
console.log(fullName(users));

const output7 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output7);


// {26:2, 75:1, 50:1}

const output8 = users.reduce(function(acc, curr) {
  if(acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]; 
  }
  else {
    acc[curr.age] = 1; 
  }

  return acc;
}, {})

console.log(output8);





// first name of every person whose age is less than 30 ...
// ["akshay","gagan","narendra"]

// const output3 = arr.filter(function greaterThan4(x) {
//   return x > 4;
// });
// console.log(output3);

const output9 = users.filter(function ageGreaterThan30(x) {
  if(x.age < 30) {
    return x;
  }
}).map(function(x) {
  return x.firstName;
})
console.log(output9);


// can do this with reduce also...
const output10 = users.reduce(function(acc,curr) {
  if(curr.age < 30) {
    return curr.firstName;
  }
},[])
console.log(output9);