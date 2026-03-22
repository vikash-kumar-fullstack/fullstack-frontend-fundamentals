/*
11_callbacks_eventloop.js

TOPIC:
- callback
- execution context
- call stack
- Web APIs (browser/Node)
- event loop
- blocking vs non-blocking
*/



/*
------------------------------------------
1. CALLBACK FUNCTION
------------------------------------------

Callback = function passed into another function
and executed later
*/

function greet(name, callback) {
    console.log("Hello " + name);

    callback(); // calling callback
}

function done() {
    console.log("Work done");
}

greet("Vikash", done);


/*
Why callbacks?
- to run something after task is finished
- very important in async programming
*/



/*
------------------------------------------
2. EXECUTION CONTEXT
------------------------------------------

Whenever JS runs code,
it creates an environment = execution context

Types:
1. Global Execution Context
2. Function Execution Context
*/


let a = 10;

function test() {
    let b = 20;
    console.log(a + b);
}

test();

/*
Global context:
- stores a, test()

Function context:
- stores b
*/



/*
------------------------------------------
3. CALL STACK
------------------------------------------

Stack = LIFO (last in first out)

Functions are pushed and popped
*/

function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}

one();

/*
Call stack flow:

start:
push one()
push two()
push three()

then pop:
three()
two()
one()
*/



/*
------------------------------------------
4. BLOCKING CODE
------------------------------------------

JS is single-threaded

Means:
one task at a time

Loop blocks execution
*/

for (let i = 0; i < 3; i++) {
    console.log("Loop:", i);
}

/*
Next code waits until loop finishes
*/



/*
------------------------------------------
5. NON-BLOCKING (setTimeout)
------------------------------------------
*/

console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 0);

console.log("End");


/*
Output:
Start
End
Timeout

Why?
Because setTimeout goes outside stack
*/



/*
------------------------------------------
6. WHAT HAPPENS INTERNALLY?
------------------------------------------

JS has:
1. Call Stack
2. Web APIs (browser/Node)
3. Callback Queue
4. Event Loop


Flow:

setTimeout → goes to Web API
after time → goes to Callback Queue
Event Loop → checks stack
if empty → pushes callback into stack
*/



/*
------------------------------------------
7. STEP BY STEP (IMPORTANT)
------------------------------------------

console.log("Start") → stack

setTimeout → Web API

console.log("End") → stack

Now stack empty

Event loop pushes timeout function

then it runs
*/



/*
------------------------------------------
8. CALLBACK QUEUE
------------------------------------------

Stores completed async tasks

Example:
setTimeout, setInterval
*/



/*
------------------------------------------
9. EVENT LOOP
------------------------------------------

Event loop = manager

It checks:

if stack is empty
→ move task from queue to stack
*/



/*
------------------------------------------
10. INTERVIEW POINT (VERY IMPORTANT)
------------------------------------------

Even if time = 0

setTimeout(fn, 0)

Still goes to queue first
Then waits for stack to be empty
*/



/*
------------------------------------------
11. FINAL UNDERSTANDING
------------------------------------------

- JS is single-threaded
- call stack runs code
- Web APIs handle async tasks
- callback queue stores completed tasks
- event loop moves tasks to stack

Blocking:
- loops, heavy work

Non-blocking:
- setTimeout, async tasks
*/