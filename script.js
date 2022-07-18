let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
   menu.classList.toggle('fa-times');
   nav.classList.toggle('nav-toggle');


});

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav a');


window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('nav-toggle');
    
}