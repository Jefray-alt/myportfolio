import './css/style.scss';
import './css/responsive.scss';
import Parallax from 'parallax-js';
import Pageable from 'pageable';

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

const instance = new Pageable('#page-container', {
  animation: 500,
});

// Bg Parallax
const scenebg1 = new Parallax(document.querySelector('#scene-bg-1'));
const scenebg2 = new Parallax(document.querySelector('#scene-bg-2'));
const scenebg3 = new Parallax(document.querySelector('#scene-bg-3'));
const scenebg4 = new Parallax(document.querySelector('#scene-bg-4'));
const scenebg5 = new Parallax(document.querySelector('#scene-bg-5'));
const scenebg6 = new Parallax(document.querySelector('#scene-bg-6'));
const scenebg7 = new Parallax(document.querySelector('#scene-bg-7'));

// Illustration Parallax
const scene1 = new Parallax(document.querySelector('#sub-scene-1'));
const scene2 = new Parallax(document.querySelector('#sub-scene-2'));
const scene3 = new Parallax(document.querySelector('#sub-scene-3'));
const scene4 = new Parallax(document.querySelector('#sub-scene-4'));
const scene5 = new Parallax(document.querySelector('#sub-scene-5'));
