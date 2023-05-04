const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const drop = header.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    drop.classList.toggle('open');
})