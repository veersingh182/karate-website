window.addEventListener('scroll',()=>{

    let navbar = document.querySelector('.navbar');
    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('navbar-bg', windowPosition);

})