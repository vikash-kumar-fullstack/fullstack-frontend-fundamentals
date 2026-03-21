/*
04_spread_rest_destructuring.js

TOPIC: Spread, Rest, and Destructuring in JavaScript

These three look similar (...) but behave differently depending on usage
*/



/*
------------------------------------------
1. SPREAD OPERATOR (...)
------------------------------------------

Spread = "expand / spread out values"
Used to unpack array or object
*/


// array example
let arr1 = [1, 2, 3];

// spread → copies values
let arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]


// merging arrays
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged); // [1,2,3,4]


// object example
let obj1 = { name: "Vikash", age: 20 };

let obj2 = { ...obj1 };

console.log(obj2);


// merging objects
let user = { name: "Vikash" };
let details = { age: 21 };

let finalUser = { ...user, ...details };

console.log(finalUser);


