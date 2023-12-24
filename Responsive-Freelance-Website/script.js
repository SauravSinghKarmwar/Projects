let navbar = document.querySelector('nav');

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'transparent';
    }
};
