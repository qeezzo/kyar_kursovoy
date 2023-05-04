const mediaQuery550 = window.matchMedia('(max-width: 550px)');

const logo = document.querySelector('.logo');
const search = document.querySelector('.search');

search.addEventListener('focus', function () {
    if (mediaQuery550.matches) {
        logo.style.maxWidth = '0';
        burger.style.width = '0';
    }
});

search.addEventListener('blur', function () {
    logo.removeAttribute('style');
    burger.removeAttribute('style');
});