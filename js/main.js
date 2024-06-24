// Nav
const navTriggerbtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerbtn.addEventListener('click',() => {
    navMenu.classList.toggle('nav-is-open');
});