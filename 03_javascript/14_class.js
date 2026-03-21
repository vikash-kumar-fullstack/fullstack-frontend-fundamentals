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


/*
Creating object using new
*/
let p1 = new Person("Vikash", 21);

/*
Behind the scenes:

new Person("Vikash", 21) does:

1. {} empty object created
2. this = that object
3. constructor runs → adds name, age
4. object returned

So p1 becomes:
{ name: "Vikash", age: 21 }
*/

p1.greet(); // uses object data



/*
------------------------------------------
2. CONSTRUCTOR (UNDERSTAND DEEPLY)
------------------------------------------
*/

class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

let c1 = new Car("BMW");

/*
Step by step:

new Car("BMW")

→ {} created
→ this = {}
→ this.brand = "BMW"
→ return object

c1 = { brand: "BMW" }
*/

console.log(c1.brand);



/*
------------------------------------------
3. NEW KEYWORD (VERY IMPORTANT)
------------------------------------------

new does 4 things:

1. creates empty object {}
2. sets this = that object
3. connects prototype
4. returns object
*/


function User(name) {
    this.name = name;
}

let u1 = new User("Vikash");

/*
u1 = { name: "Vikash" }
*/

console.log(u1);



/*
------------------------------------------
4. this in CLASS (VERY IMPORTANT)
------------------------------------------

this = current object
*/

class Student {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(this.name);
    }
}

let s1 = new Student("Rahul");

/*
this.name → Rahul
*/

s1.show();



/*
------------------------------------------
5. this in NORMAL FUNCTION
------------------------------------------

Depends on HOW function is called
*/

function showName() {
    console.log(this);
}

showName();

/*
In Node:
this → global object

In strict mode:
this → undefined
*/



/*
------------------------------------------
6. this inside object
------------------------------------------
*/

let obj = {
    name: "Vikash",

    show: function () {
        console.log(this.name);
    }
};

obj.show();

/*
this → obj

So:
this.name → obj.name → "Vikash"
*/



/*
------------------------------------------
7. this in ARROW FUNCTION (VERY IMPORTANT)
------------------------------------------

Arrow function DOES NOT have its own this
It takes from parent scope
*/

let obj2 = {
    name: "Amit",

    normalFunc: function () {
        console.log("Normal:", this.name);
    },

    arrowFunc: () => {
        console.log("Arrow:", this.name);
    }
};

obj2.normalFunc(); // Amit

/*
arrowFunc:

this is NOT obj2
this comes from outer scope (global)

So:
this.name → undefined
*/

obj2.arrowFunc();


