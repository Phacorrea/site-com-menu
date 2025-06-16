// menu.js
// Simple hamburger menu functionality

function initMenu() {
    var nav = document.querySelector('nav');
    if (!nav) return;

    var toggle = nav.querySelector('.menu-toggle');
    var links = nav.querySelectorAll('.nav-links a');

    if (toggle) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', initMenu);
window.initMenu = initMenu;
