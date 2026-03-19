/*
03_regex.js

TOPIC: Regular Expressions (Regex)

Regex = pattern used to match text

Example:
- check email
- check phone number
- search word in string
*/



/*
------------------------------------------
1. Creating Regex
------------------------------------------
*/

// method 1 (most common)
let pattern1 = /hello/;

// method 2 (constructor)
let pattern2 = new RegExp("hello");



/*
------------------------------------------
2. test() method
------------------------------------------

returns true or false
*/

let str = "hello world";

console.log(pattern1.test(str)); // true
console.log(/bye/.test(str));    // false



/*
------------------------------------------
3. match() method
------------------------------------------

returns matched value
*/

let text = "I love JavaScript";

let result = text.match(/JavaScript/);

console.log(result);



/*
------------------------------------------
4. Basic patterns
------------------------------------------
*/

// exact word
console.log(/cat/.test("cat")); // true

// case sensitive
console.log(/cat/.test("Cat")); // false



/*
------------------------------------------
5. Flags (important)
------------------------------------------
*/

// i → ignore case
console.log(/cat/i.test("Cat")); // true

// g → global (find all matches)
let str2 = "cat dog cat";
console.log(str2.match(/cat/g)); // ["cat", "cat"]


