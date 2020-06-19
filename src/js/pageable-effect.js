import Pageable from 'pageable';
import {
  firstPageAnimations,
  convertNodes,
  secondPageAnimations,
  thirdPageAnimations,
  fourthPageAnimations,
  fifthPageAnimations,
  sixthPageAnimations,
  seventhPageAnimations,
} from './animations.js';

export default function () {
  convertNodes();
  const instance = new Pageable('#page-container', {
    animation: 500,
    onInit: function (data) {
      checkPage(data.index);
    },
  });

  instance.on('scroll.end', (data) => {
    checkPage(data.index);
  });
}

function checkPage(index) {
  switch (index) {
    case 0:
      firstPageAnimations();
    case 1:
      secondPageAnimations();
    case 2:
      thirdPageAnimations();
    case 3:
      fourthPageAnimations();
    case 4:
      fifthPageAnimations();
    case 5:
      sixthPageAnimations();
    case 6:
      seventhPageAnimations();
  }
}
