/*CONDITIONS IN JAVASCRIPT*/

/*
In this file we will understand:

1. if
2. if-else
3. else-if ladder
4. switch
5. ternary operator

These are used for decision making.
*/


/*IF STATEMENT*/

/*
Syntax:

if(condition){
    code runs if condition is true
}
*/

let age = 20;

if(age >= 18){
    console.log("You are an adult");
}

/*
Condition must return true or false
*/



/*IF - ELSE*/

/*
Syntax:

if(condition){
    run if true
}else{
    run if false
}
*/

let marks = 40;

if(marks >= 50){
    console.log("Pass");
}else{
    console.log("Fail");
}



/*ELSE IF LADDER*/

/*
Used when we have multiple conditions
*/

let score = 75;

if(score >= 90){
    console.log("Grade A");
}
else if(score >= 75){
    console.log("Grade B");
}
else if(score >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}



/*REAL LIFE EXAMPLE*/

let userAge = 22;
let hasID = true;

if(userAge >= 18 && hasID){
    console.log("Entry allowed");
}else{
    console.log("Entry denied");
}



/*SWITCH STATEMENT*/

/*
Used when we have multiple fixed values

Syntax:

switch(value){
    case x:
        break;
}
*/

let day = 3;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}



/*
IMPORTANT:

break is necessary
otherwise all cases after match will run
*/



/*TERNARY OPERATOR*/

/*
Short form of if-else

Syntax:

condition ? true_value : false_value
*/

let num = 10;

let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);


// NESTED CONDITIONS

/*
Condition inside condition
*/

let user = true;
let admin = false;

if(user){

    if(admin){
        console.log("Welcome Admin");
    }else{
        console.log("Welcome User");
    }

}



/*COMMON MISTAKES*/

/*
1. Using = instead of ==
❌ if(a = 10)

2. Using == instead of ===
Always use ===

3. Forgetting break in switch

4. Writing too many nested if (bad practice)
*/

