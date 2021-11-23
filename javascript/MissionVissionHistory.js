let navbar = document.querySelector('.navbar');
let nav_small = document.getElementById('nav-small');
let menu = document.getElementById('menu');
nav_small.addEventListener('click',()=>{
    
    navbar.classList.toggle('bgColor_nav_small');
    menu.classList.toggle('menu_display_block');

});