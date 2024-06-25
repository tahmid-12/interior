// Nav
const navTriggerbtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerbtn.addEventListener('click',() => {
    navMenu.classList.toggle('nav-is-open');
});

// Swiper
const swiper = new Swiper('.swiper',{
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320:{
            slidesPerView: 1
        },
        960:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3
        },
    },
});