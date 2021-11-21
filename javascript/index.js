let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('navbar-bg', windowPosition);

});

let nav_small = document.getElementById('nav-small');
let menu = document.getElementsByClassName('menu');

nav_small.addEventListener('click',()=>{

    navbar.classList.toggle('bgColor_nav_small');
    navbar.classList.toggle('navbar-bg', windowPosition);
    menu.classList.toggle('menu_display_block');

});