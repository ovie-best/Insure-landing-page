'use strict';

const hambuger = document.querySelector('.hambuger');
const closeButton = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

function showMenu() {
    hambuger.style.display = 'none';
    closeButton.style.display = 'block';
    mobileMenu.style.right = '0';
}

function hideMenu() {
    closeButton.style.display = 'none';
    hambuger.style.display = 'block';
    mobileMenu.style.right = '-100%';
}

hambuger.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
