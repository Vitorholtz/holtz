// mobile menu toggle
let menuToggle = document.querySelector('.mobile-menu-toggle');
let mobileMenu = document.querySelector('.vh-header');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('mobile-menu-toggle--active');
    mobileMenu.classList.toggle('vh-header--mobile');
})
