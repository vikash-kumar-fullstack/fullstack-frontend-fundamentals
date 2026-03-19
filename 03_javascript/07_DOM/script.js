/*
DOM Practice File
Connected with index.html

DOM = Document Object Model
JS uses DOM to access and change HTML
*/


/*
------------------------------------------
1. Selecting elements
------------------------------------------
*/

// by id
let title = document.getElementById("title");

// by class (returns HTMLCollection)
let items = document.getElementsByClassName("item");

// by id
let button = document.getElementById("btn");
let input = document.getElementById("inputBox");
let link = document.getElementById("link");


/*
------------------------------------------
2. Changing text/content
------------------------------------------
*/

// innerText → only text
title.innerText = "DOM Learning Started";

// innerHTML → allows HTML tags
// title.innerHTML = "<span>New Title</span>";



/*
------------------------------------------
3. Changing style
------------------------------------------
*/

title.style.color = "blue";
title.style.fontSize = "30px";



/*
------------------------------------------
4. Loop through elements
------------------------------------------
*/

for (let item of items) {
    console.log(item.innerText);
}



/*
------------------------------------------
5. Working with attributes
------------------------------------------
*/

// get attribute
console.log(link.getAttribute("href"));

// set attribute
link.setAttribute("href", "https://google.com");





