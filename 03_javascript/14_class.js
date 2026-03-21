/*
TOPIC:
- class
- constructor
- new keyword
- this keyword (class, function, arrow)
- function constructor vs class
- difference from C++
*/



/*
------------------------------------------
1. WHAT IS CLASS?
------------------------------------------

Think like real life:

We don’t create object directly.
We create a "design" first.

Example:
Person → name, age → behavior: greet

That design = class
*/


class Person {

    /*
    constructor is a special function
    It runs automatically when we create object using new

    Here:
    name, age → input values
    this.name → property of object being created
    */

    constructor(name, age) {
        this.name = name;   // store value inside object
        this.age = age;
    }

    /*
    this method is shared by all objects
    */
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

