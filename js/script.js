const MENU = document.querySelector(".menu");

function toggleActive(){
    this.classList.toggle("active");
}

MENU.addEventListener("click", toggleActive);

