import './css/style.scss';
import './css/responsive.scss';
import parallax from './js/parallax-effect.js';
import pageable from './js/pageable-effect.js';

// Hamburger Code
const burger = document.querySelector('.nav-icon-container');
const navsm = document.querySelector('.nav-sm .nav-menu');
const navlink = document.querySelectorAll(
  '.nav-sm .nav-menu .nav-item .nav-link'
);

burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  if (navsm.classList.contains('enter')) {
    navsm.classList.add('leave');
    navsm.classList.remove('enter');
  } else if (navsm.classList.contains('leave')) {
    navsm.classList.add('enter');
    navsm.classList.remove('leave');
  } else {
    navsm.classList.add('enter');
  }
});

navlink.forEach((element) => {
  element.addEventListener('click', function () {
    navsm.classList.add('leave');
    navsm.classList.remove('enter');
    burger.classList.remove('open');
  });
});

// Initialize third-party plugins
parallax();
pageable();
