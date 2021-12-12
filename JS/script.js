const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const menu = document.querySelector('.menu')
const nav = document.querySelector('.bars');


nav.addEventListener("click", function() {
    bar1.classList.toggle("rotate")
    bar2.classList.toggle("rotate")
    menu.classList.toggle("active")
})