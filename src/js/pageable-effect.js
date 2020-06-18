import Pageable from 'pageable';
export function init() {
  const instance = new Pageable('#page-container', {
    animation: 500,
  });
}
