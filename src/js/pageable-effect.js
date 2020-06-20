import 'pagepiling.js';
import 'pagepiling.js/jquery.pagepiling.css';

import {
  firstPageAnimations,
  convertNodes,
  secondPageAnimations,
  thirdPageAnimations,
  fourthPageAnimations,
  fifthPageAnimations,
  sixthPageAnimations,
  seventhPageAnimations,
  preloaderAnimation,
} from './animations.js';

export default function () {
  convertNodes();
  preloaderAnimation();
  initPlugin();
  // const instance = new Pageable('#page-container', {
  //   animation: 500,
  //   onInit: function (data) {
  //     checkPage(data.index);
  //   },
  // });

  // instance.on('scroll.end', (data) => {
  //   checkPage(data.index);
  // });
}

function checkPage(index) {
  switch (index) {
    case 1:
      firstPageAnimations();
    case 2:
      secondPageAnimations();
    case 3:
      thirdPageAnimations();
    case 4:
      fourthPageAnimations();
    case 5:
      fifthPageAnimations();
    case 6:
      sixthPageAnimations();
  }
}

function initPlugin() {
  $(document).ready(function () {
    $('#pagepiling').pagepiling({
      sectionsColor: [
        '#1e1b18',
        '#ff4655',
        '#1e1b18',
        '#3d348b',
        '#0e867f',
        '#0a0a1b',
        '#4e717d',
      ],
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
      onLeave: function (index, nextIndex, direction) {
        if (direction === 'down') {
          checkPage(nextIndex);
        }
      },
      afterRender: function () {
        const sections = document.querySelectorAll('.section');
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].classList.contains('active')) {
            checkPage(i + 1);
          }
        }
      },
    });
  });
}
