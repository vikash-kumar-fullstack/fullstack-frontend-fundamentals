/*
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


/*
------------------------------------------
6. Special characters
------------------------------------------
*/

// . → any single character
console.log(/c.t/.test("cat")); // true
console.log(/c.t/.test("cut")); // true

// ^ → start
console.log(/^hello/.test("hello world")); // true

// $ → end
console.log(/world$/.test("hello world")); // true



/*
------------------------------------------
7. Character sets
------------------------------------------
*/

// [abc] → any one of a,b,c
console.log(/[abc]/.test("apple")); // true

// [a-z] → lowercase letters
console.log(/[a-z]/.test("hello")); // true

// [0-9] → digits
console.log(/[0-9]/.test("123")); // true



/*
------------------------------------------
8. Shortcuts
------------------------------------------
*/

// \d → digits
console.log(/\d/.test("5")); // true

// \w → word (a-z, A-Z, 0-9, _)
console.log(/\w/.test("A")); // true

// \s → space
console.log(/\s/.test(" ")); // true



/*
------------------------------------------
9. Quantifiers (how many times)
------------------------------------------
*/

// + → one or more
console.log(/a+/.test("aaa")); // true

// * → zero or more
console.log(/a*/.test("bbb")); // true

// ? → optional
console.log(/colou?r/.test("color"));  // true
console.log(/colou?r/.test("colour")); // true

// {n} → exact count
console.log(/\d{3}/.test("123")); // true

// {n,m} → range
console.log(/\d{2,4}/.test("1234")); // true



/*
------------------------------------------
10. Replace
------------------------------------------
*/

let msg = "hello world";

let newMsg = msg.replace("world", "Vikash");

console.log(newMsg);



/*
------------------------------------------
11. Split using regex
------------------------------------------
*/

let data = "apple,banana,mango";

let arr = data.split(/,/);

console.log(arr);



/*
------------------------------------------
12. Email validation (basic example)
------------------------------------------
*/

let emailPattern = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,}$/;

console.log(emailPattern.test("test@gmail.com")); // true
console.log(emailPattern.test("wrong-email"));    // false



/*
------------------------------------------
13. Phone number (simple)
------------------------------------------
*/

let phonePattern = /^[0-9]{10}$/;

console.log(phonePattern.test("9876543210")); // true
console.log(phonePattern.test("12345"));      // false



/*
------------------------------------------
Important points
------------------------------------------

- regex = pattern matching
- test() → true/false
- match() → returns result
- flags (i, g) important
- quantifiers control repetition
- used in validation

------------------------------------------
Common mistake
------------------------------------------

Wrong:
"hello".match("hello")

Correct:
"hello".match(/hello/)
*/
