// menu.js
// Simple hamburger menu functionality

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.menu-toggle');
    var links = document.querySelectorAll('.nav-links a');

    if (!nav || !toggle) return;

    toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    });
});
