const closebtn = document.querySelector('.closebtn');
const openbtn = document.querySelector('.openbtn');
const mobilemenu = document.querySelector('.m-menu')
closebtn.addEventListener('click', () => {
    mobilemenu.classList.toggle('openb')
})
openbtn.addEventListener('click', () => {
    mobilemenu.classList.toggle('openb')
})

const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        bulletClass: "bullet-custom",
        bulletActiveClass: 'swiper-pagination-custom-active'
    },



    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
});