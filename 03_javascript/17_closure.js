/*
10_closures.js

TOPIC:
- what is closure
- lexical scope
- how closure works internally
- real examples
- common mistakes
*/



/*
------------------------------------------
1. WHAT IS LEXICAL SCOPE?
------------------------------------------

Lexical = where the function is written

Inner function can access variables of outer function
*/

function outer() {
    let name = "Vikash";

    function inner() {
        console.log(name); // can access outer variable
    }

    inner();
}

outer();



/*
------------------------------------------
2. WHAT IS CLOSURE?
------------------------------------------

Closure = when a function remembers variables from its outer scope
even after outer function is finished
*/

function outer2() {
    let count = 0;

    function inner2() {
        count++;
        console.log("Count:", count);
    }

    return inner2;
}


/*
outer2() finishes execution,
but inner2 still remembers 'count'
*/

let counter = outer2();

counter(); // 1
counter(); // 2
counter(); // 3



/*
------------------------------------------
3. WHY THIS WORKS?
------------------------------------------

Because JS does not delete outer variables
if inner function is still using them

This is closure
*/



/*
------------------------------------------
4. STEP BY STEP UNDERSTANDING
------------------------------------------

let counter = outer2();

Step 1: outer2 runs
Step 2: count = 0 created
Step 3: inner2 returned
Step 4: outer2 is gone BUT count is still alive

Now:
counter() → uses same count
*/



/*
------------------------------------------
5. MULTIPLE INSTANCES (VERY IMPORTANT)
------------------------------------------
*/

let c1 = outer2();
let c2 = outer2();

c1(); // 1
c1(); // 2

c2(); // 1 (separate memory)

/*
Each function has its own closure
*/

