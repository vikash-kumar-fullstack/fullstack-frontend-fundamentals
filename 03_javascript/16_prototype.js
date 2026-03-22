/*
TOPIC:
- what is prototype
- how objects use prototype
- adding methods to Object prototype
- adding methods to Array prototype
- prototype inheritance
- setPrototypeOf (modern way)
*/



/*
------------------------------------------
1. WHAT IS PROTOTYPE?
------------------------------------------

Every object in JavaScript has a hidden property called [[Prototype]]

It points to another object.

If a property is not found in object,
JS looks into its prototype.

This is called PROTOTYPE CHAIN
*/


let obj = {
    name: "Vikash"
};

console.log(obj.toString());

/*
We never defined toString()

Still it works because:
obj → Object.prototype → toString()
*/



/*
------------------------------------------
2. ACCESSING PROTOTYPE
------------------------------------------
*/

let user = {
    name: "Rahul"
};

console.log(user.__proto__); // points to Object.prototype



/*
------------------------------------------
3. ADDING METHOD TO OBJECT PROTOTYPE
------------------------------------------

If we add something in Object.prototype,
ALL objects can use it
*/

Object.prototype.sayHello = function () {
    console.log("Hello from prototype");
};


let a = { x: 1 };
let b = { y: 2 };

a.sayHello();
b.sayHello();

/*
Both objects can use sayHello()

Because both inherit from Object.prototype
*/



/*
------------------------------------------
IMPORTANT NOTE
------------------------------------------

Modifying Object.prototype is risky in real projects

But good for understanding
*/



/*
------------------------------------------
4. ADDING METHOD TO ARRAY PROTOTYPE
------------------------------------------

Now only arrays can use it
*/

Array.prototype.double = function () {
    return this.map(num => num * 2);
};


let arr = [1, 2, 3];

console.log(arr.double());

/*
Objects cannot use this method
Only arrays
*/



/*
------------------------------------------
5. PROTOTYPE INHERITANCE (OLD WAY)
------------------------------------------

One object can use properties of another object
*/

let animal = {
    eats: true
};

let dog = {
    barks: true,
    //method1:-
    // __proto__:animal
};

// linking prototype
//method2
dog.__proto__ = animal;

console.log(dog.eats); // true

/*
dog does not have eats

JS checks:
dog → animal → found
*/



/*
------------------------------------------
6. PROTOTYPE CHAIN
------------------------------------------

dog → animal → Object.prototype → null
*/



/*
------------------------------------------
7. MODERN WAY: setPrototypeOf
------------------------------------------

Better way than __proto__
*/

let parent = {
    greet() {
        console.log("Hello");
    }
};

let child = {};

Object.setPrototypeOf(child, parent);

child.greet();



/*
------------------------------------------
8. CREATING OBJECT WITH PROTOTYPE
------------------------------------------
*/

let base = {
    speak() {
        console.log("Speaking");
    }
};

let obj2 = Object.create(base);

obj2.speak();

// example

Object.prototype.truelength=function (){
    console.log("true length of the "+this+" is :-"+this.trim().length)
}

st="Vikash    "
st.truelength()
/*
------------------------------------------
9. HOW JS LOOKUP WORKS
------------------------------------------

When we do:

obj.property

JS checks:

1. inside obj
2. inside obj.__proto__
3. inside next prototype
4. until null
*/



/*
------------------------------------------
10. IMPORTANT DIFFERENCE
------------------------------------------

Own property vs inherited property
*/

let person = {
    name: "Vikash"
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false



/*
------------------------------------------
11. FINAL UNDERSTANDING
------------------------------------------

- Every object has prototype
- Prototype is used for inheritance
- Object.prototype is top level
- Array has its own prototype
- JS uses prototype chain to find values
*/