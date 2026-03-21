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



