/*
TOPIC:
- static methods
- getters and setters
- private properties
- real example (Complex Numbers)
*/



/*
------------------------------------------
1. STATIC METHODS
------------------------------------------

static method belongs to class, not object

Meaning:
- we call using ClassName.method()
- not using object
*/

class MathUtils {

    // static method
    static add(a, b) {
        return a + b;
    }
}

/*
calling static method
*/

console.log(MathUtils.add(2, 3));

/*
Important:
let obj = new MathUtils();
obj.add() //error

Because static method is not inside object
*/

