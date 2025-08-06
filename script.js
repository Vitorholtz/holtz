// mobile menu toggle
let menuToggle = document.querySelector('.mobile-menu-toggle');
let mobileMenu = document.querySelector('.vh-header');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('mobile-menu-toggle--active');
    mobileMenu.classList.toggle('vh-header--mobile');
})

// header change on scroll
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.vh-header').addClass('vh-header--scroll-mode');
    } else {
       $('.vh-header').removeClass('vh-header--scroll-mode');
    }
});

// Back to top btn
var btn = $('.btt-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('btt-btn--show');
  } else {
    btn.removeClass('btt-btn--show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

