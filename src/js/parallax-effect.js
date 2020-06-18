import Parallax from 'parallax-js';
export function init() {
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
}
