const MENU = document.querySelector(".menu");
const OVERLAYDIV = document.querySelector(".overlay");
const NAVITEMS = document.querySelectorAll(".nav a");

function toggleActive(){
    this.classList.toggle("active");
    OVERLAYDIV.classList.toggle("menu-open");
}

MENU.addEventListener("click", toggleActive);

function toggleOverlay(){
    MENU.classList.remove("active");
    OVERLAYDIV.classList.remove("menu-open");
}

for (i = 0; i < NAVITEMS.length; i++){
    NAVITEMS[i].addEventListener("click", toggleOverlay);
}

