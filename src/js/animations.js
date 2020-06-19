import anime from 'animejs/lib/anime.es.js';

const nodes = [
  '.first-page .content .left-container .display-1',
  '.second-page .content .left-container .display-2',
  '.third-page .content .left-container .heading',
  '.third-page .content .left-container .display-2-simple',
  '.fourth-page .content .left-container .heading',
  '.fourth-page .content .left-container .display-2-simple',
  '.fifth-page .content .left-container .heading',
  '.fifth-page .content .left-container .display-2-simple',
  '.sixth-page .content .left-container .heading',
  '.sixth-page .content .left-container .display-2-simple',
];

export function convertNodes() {
  let textWrapper;
  for (let i = 0; i < nodes.length; i++) {
    textWrapper = document.querySelector(nodes[i]);
    convertToSpan(textWrapper);
  }
}

export function firstPageAnimations() {
  anime
    .timeline()
    .add({
      targets: `${nodes[0]} .letter`,
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      delay: (el, i) => 150 * i,
    })
    .add(
      {
        targets: '.first-page .content .left-container .details p',
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
      },
      200
    )
    .add(
      {
        targets: '.first-page .content .left-container .btn',
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        delay: (el, i) => 150 * i,
      },
      450
    );
}

export function secondPageAnimations() {
  anime.remove(`${nodes[1]} .letter`);
  anime.remove('.second-page .content .left-container .details p');
  anime
    .timeline()
    .add({
      targets: `${nodes[1]} .letter`,
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      delay: (el, i) => 150 * i,
    })
    .add(
      {
        targets: '.second-page .content .left-container .details p',
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
      },
      200
    );
}

export function thirdPageAnimations() {
  repeatingAnimations(nodes[2], nodes[3], '.third-page');
}

export function fourthPageAnimations() {
  repeatingAnimations(nodes[4], nodes[5], '.fourth-page');
}
export function fifthPageAnimations() {
  repeatingAnimations(nodes[6], nodes[7], '.fifth-page');
}
export function sixthPageAnimations() {
  repeatingAnimations(nodes[8], nodes[9], '.sixth-page');
}

export function seventhPageAnimations() {
  anime.remove('.seventh-page .content div');
  anime({
    targets: '.seventh-page .content div',
    opacity: [0, 1],
    delay: (el, i) => 100 * i,
  });
}

function repeatingAnimations(node1, node2, classPage) {
  anime.remove(`${node1} .letter`);
  anime.remove(`${node2} .letter`);
  anime.remove(`${classPage} .content .left-container .specs .sub-heading`);
  anime.remove(`${classPage} .content .left-container .details p`);
  anime.remove(`${classPage} .content .left-container .cta .btn`);
  anime
    .timeline()
    .add(
      {
        targets: `${node1} .letter`,
        translateX: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: (el, i) => 50 * i,
      },
      1
    )
    .add(
      {
        targets: `${node2} .letter`,
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        delay: (el, i) => 100 * i,
      },
      1
    )
    .add(
      {
        targets: `${classPage} .content .left-container .specs .sub-heading`,
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
      },
      1
    )
    .add(
      {
        targets: `${classPage} .content .left-container .details p`,
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
      },
      1
    )
    .add(
      {
        targets: `${classPage} .content .left-container .cta .btn`,
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        delay: (el, i) => 50 * i,
      },
      1
    );
}

function convertToSpan(textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}
