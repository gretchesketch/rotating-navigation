//creating a variable named open and getting it from the html doc
// open is an id in html
const open = document.getElementById("open");
//creating a variable named close and getting it from the html doc
//close is an id in html
const close = document.getElementById("close");
// creating a variable named container and getting it from html doc
//container is a class in html
const container = document.querySelector(".container");

//added an event listener to open
//listen for a click, when that happens run an arrow function
//take the container and from the class list add the class of show-nav
open.addEventListener("click", () => container.classlist.add("show-nav"));

//added an event listener to close
//listen for a click, when that happens run an arrow function
//take the container and from the class list remove the class of show-nav
close.addEventListener("click", () => container.classlist.remove("show-nav"));