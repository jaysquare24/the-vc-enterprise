/* DOM ELEMENT*/

let menu = document.getElementById("menu");
let navBar = document.getElementById("navbar");
let navigators = document.querySelectorAll(".nav");

/* DOM STATE */
  navBar.hidden = true;
 

/* EVENT HANDLER */
const showAndHideNavigators = () => {
    navBar.hidden = !navBar.hidden;
}

/* EVENT LISTENER*/

menu.addEventListener("click", showAndHideNavigators)
navigators.forEach((nav) => { 
    nav.addEventListener("click", () => {navBar.hidden = true});
})