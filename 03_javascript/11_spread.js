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



/*
------------------------------------------
2. REST OPERATOR (...)
------------------------------------------

Rest = "collect multiple values into one"
Used in function parameters
*/


function sumAll(...numbers) {
    // numbers becomes array
    let sum = 0;

    sum=numbers.reduce((a,b)=>a+b)

    return sum;
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(10, 20, 30, 40)); // 100



/*
Rest with normal parameters
*/

function printData(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}

printData(1, 2, 3, 4, 5);
printData(1,2)

