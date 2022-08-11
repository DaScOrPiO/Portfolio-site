const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const firstInputSet = document.querySelector('.text-input');
const secondInputSet = document.querySelector('.input')
const formbtn = document.querySelector('input[type=Submit]');
const linkEl = navMenu.querySelectorAll('.nav-link');
const header = document.querySelector('.header');
const darkModebtn = document.querySelector('.dark');

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    linkEl.forEach((e) => {
        e.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        })
    })
}
hamburger.addEventListener('click', mobileMenu);

function validateForm() {
    let content1 = firstInputSet.value;
    let content2 = firstInputSet.value;
    let text;
    if (content1 === '' || content2 === '') {
        alert('No Input detected');
    }
}
formbtn.addEventListener('click', validateForm);

function backgroundSwitch() {
    darkModebtn.addEventListener('click', (() => {
        document.body.classList.toggle('dark-mode');
    }))
}
backgroundSwitch()