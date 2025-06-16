// scroll.js
// Reveals elements with the 'animado' class when scrolling

document.addEventListener('DOMContentLoaded', function () {
    function revelarAoRolar() {
        document.querySelectorAll('.animado').forEach(function (el) {
            const pos = el.getBoundingClientRect();
            if (pos.top < window.innerHeight - 50) {
                el.classList.add('aparecer');
            }
        });
    }

    window.addEventListener('scroll', revelarAoRolar);
    revelarAoRolar();
});
