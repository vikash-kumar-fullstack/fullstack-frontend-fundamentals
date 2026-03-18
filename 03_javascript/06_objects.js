/*
01_objects.js
TOPIC: Objects in JavaScript (Node.js)

Object = a collection of key-value pairs

Example:
name → Vikash
age → 20

Instead of storing separately, we group them together

Why objects?
- store related data
- used everywhere (APIs, DB, JSON)
- base of backend development
*/


/*
Difference between variables and objects

Variables:
- store single value
- example:
*/

let name = "Vikash";
let age = 20;

/*
Objects:
- store multiple values together
*/

let user = {
    name: "Vikash",
    age: 20
};

console.log(user);



/*
Creating objects (normal way)
*/

let person = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

console.log(person);


/*
Accessing values
*/

// dot notation
console.log(person.name);

// bracket notation
console.log(person["age"]);



/*
Updating values
*/

person.age = 26;
console.log(person);


/*
Adding new property
*/

person.country = "India";
console.log(person);


/*
Deleting property
*/

delete person.city;
console.log(person);



/*
Creating object using 'new Object()'
*/

let car = new Object();

car.brand = "BMW";
car.price = 5000000;

console.log(car);



/*
Functions inside object (methods)
*/

let student = {
    name: "Vikash",
    marks: 90,

    greet: function () {
        console.log("Hello " + this.name);
    }
};

student.greet();

/*
this keyword:
- refers to current object
- here this.name → student.name
*/



/*
Another example of this
*/

let user2 = {
    name: "Amit",
    showName: function () {
        console.log(this.name);
    }
};

user2.showName();

/*
Another example of this
*/

function fun(a,b,c){
    this.first=a;
    this.second=b;
    this.third=c;
}
let obj3=new fun(3,4,5)
console.log(obj3)


/*
Important Object Methods
*/


/*
1. Object.keys()

returns all keys
*/

let obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));



/*
2. Object.values()

returns all values
*/

console.log(Object.values(obj));



/*
3. Object.entries()

returns key-value pairs
*/

console.log(Object.entries(obj));



/*
4. hasOwnProperty()

checks if key exists
*/

console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("z")); // false



/*
5. Object.assign()

copy properties
*/

let target = {};
let source = { x: 10, y: 20 };

Object.assign(target, source);

console.log(target);


let target2 = {a:"vikash",b:"ramu"};
let source2 = { x: 10, y: 20 };

let concate=Object.assign({},target2, source2);         //method1
let concate2={...target2,...source2}                    //method2

console.log(concate);
console.log(concate2)



/*
6. Spread operator (modern way of copy)
*/

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };

console.log(obj2);

/*
7. Freeze operator 
restrict not to modify the object not even updation
but not gives any error
*/

let ob1 = { a: 1, b: 2 };
Object.freeze(ob1)
ob1.a=4
console.log(ob1)          //still will be change , means changes won't apply

/*
7. Seal operator 
restrict not to modify the object but allow updation
*/

let ob2 = { a: 1, b: 2 };
Object.seal(ob2)
ob2.a=4         //change will apply
ob2.c=5         //this isnot apply ,i.e restrict the addition and deletion
console.log(ob2) 

/*
Looping through object
*/

let data = {
    name: "Vikash",
    age: 21,
    city: "Patna"
};

for (let key in data) {
    console.log(key, data[key]);
}

