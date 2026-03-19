/*
DOM = Document Object Model

Browser converts HTML into object structure
JS uses it to read/change page

Everything in HTML becomes an object (node)
*/


/*
------------------------------------------
1. Selecting elements
------------------------------------------
*/

let title = document.getElementById("title"); // by id
let items = document.getElementsByClassName("item"); // by class
let button = document.getElementById("btn");
let input = document.getElementById("inputBox");
let link = document.getElementById("link");


// modern way
let firstLi = document.querySelector("li"); // first match
let allLi = document.querySelectorAll("li"); // all matches



/*
------------------------------------------
2. Changing content
------------------------------------------
*/

title.innerText = "DOM Started"; // text only

title.innerHTML = "<span>DOM Started (HTML)</span>"; // allows HTML



/*
------------------------------------------
3. Changing style
------------------------------------------
*/

title.style.color = "blue";
title.style.fontSize = "30px";



/*
------------------------------------------
4. Working with attributes
------------------------------------------
*/

console.log(link.getAttribute("href")); // get

link.setAttribute("href", "https://google.com"); // set



/*
------------------------------------------
5. Class handling (VERY IMPORTANT)
------------------------------------------
*/

// add class
title.classList.add("active");

// remove class
title.classList.remove("active");

// toggle class (add/remove automatically)
title.classList.toggle("active");

// check class
console.log(title.classList.contains("active"));



/*
------------------------------------------
6. Creating elements
------------------------------------------
*/

let newDiv = document.createElement("div");

newDiv.innerText = "I am new element";

newDiv.classList.add("box");



/*
------------------------------------------
7. Adding elements
------------------------------------------
*/

// add at end
document.body.appendChild(newDiv);

// add at start
document.body.prepend(newDiv);



/*
------------------------------------------
8. Removing elements
------------------------------------------
*/

setTimeout(() => {
    newDiv.remove();
}, 5000);



/*
------------------------------------------
9. Traversing DOM (moving around)
------------------------------------------
*/

let list = document.getElementById("list");

// parent
console.log(list.parentElement);

// children
console.log(list.children);

// first child
console.log(list.firstElementChild);

// last child
console.log(list.lastElementChild);



/*
------------------------------------------
10. Looping elements
------------------------------------------
*/

for (let item of items) {
    console.log(item.innerText);
}

allLi.forEach(function (li) {
    console.log(li.innerText);
});



/*
------------------------------------------
11. Event handling
------------------------------------------
*/

// best way
button.addEventListener("click", function () {
    console.log("Button clicked");
});


/*
Difference:

HTML way:
<button onclick="handleClick()"></button>

JS way:
button.addEventListener("click", handleClick);

function handleClick() {}

Important:
- here we pass function (no ())
- JS will call it on event

Wrong:
handleClick() → runs immediately
*/



/*
------------------------------------------
12. Input event
------------------------------------------
*/

input.addEventListener("input", function () {
    console.log("User typing:", input.value);
});



/*
------------------------------------------
13. Event object
------------------------------------------
*/

button.addEventListener("click", function (event) {
    console.log(event); // gives full event info
});



/*
------------------------------------------
14. Changing multiple elements
------------------------------------------
*/

allLi.forEach(function (li) {
    li.style.color = "green";
});


/*
------------------------------------------
HTMLCollection vs NodeList (IMPORTANT)
------------------------------------------

When we select elements in DOM, different methods return different types.


1. getElementsByTagName()
2. getElementsByClassName()

→ These return HTMLCollection

Example:
let items = document.getElementsByClassName("item");

Important points:
- looks like array but not real array
- we cannot use forEach directly
- we have to use loop or indexing (items[0], items[1])
- it is LIVE (auto updates if DOM changes)



3. querySelectorAll()

→ This returns NodeList

Example:
let items = document.querySelectorAll(".item");

Important points:
- looks like array
- supports forEach (easy to use)
- mostly STATIC (does not update automatically)



4. querySelector()

→ returns only FIRST matching element (not list)

Example:
let item = document.querySelector(".item");



5. getElementById()

→ returns single element

Example:
let el = document.getElementById("title");



------------------------------------------
Difference between HTMLCollection and NodeList
------------------------------------------

HTMLCollection:
- returned by old methods
- live collection
- no forEach
- need loop or index

NodeList:
- returned by querySelectorAll
- static (mostly)
- supports forEach
- easier to use



------------------------------------------
Common mistake
------------------------------------------

Wrong:
let items = document.getElementsByClassName("item");
items.style.color = "red";   // ❌ error

Correct:
items[0].style.color = "red";  // ✔



------------------------------------------
Best practice
------------------------------------------

Use querySelector / querySelectorAll in most cases
because code becomes cleaner and easier
*/