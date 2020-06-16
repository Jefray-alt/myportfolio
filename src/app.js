import './css/style.scss';
import Parallax from 'parallax-js';
import Pageable from 'pageable';

const instance = new Pageable('#page-container');
// const scene = document.getElementById('scene');

const scene1 = new Parallax(document.querySelector('#scene-bg'));
const scene2 = new Parallax(document.querySelector('#sub-scene-1'));
