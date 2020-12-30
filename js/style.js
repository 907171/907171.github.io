// awal hamburger menu
const menuBtn = document.querySelector('.hamburger');
const menuCont = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.list');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuCont.classList.add('open');
        menuList.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuCont.classList.remove('open');
        menuList.classList.remove('open');
        menuOpen = false;
    }
})
// akhir hamburger menu