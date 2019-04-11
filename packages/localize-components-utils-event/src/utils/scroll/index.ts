import { preventDefault } from '../common';

export function disabledScrollByKey(event) {
  const SCROLL_KEYS = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];
  if (SCROLL_KEYS.includes(event.key)) {
    preventDefault(event);
    return false;
  }
  return true;
}

const disableScroll = () => {
  // older FF
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener('scroll', preventDefault, false);
    window.addEventListener('keydown', disabledScrollByKey, false);
  }
  document.onkeydown = disabledScrollByKey;
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
};

const enableScroll = () => {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener('scroll', preventDefault, false);
    window.removeEventListener('keydown', disabledScrollByKey, false);
  }
  document.onkeydown = null;
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
};

export const preventWindowScroll = (isStop = true) => {
  if (isStop) {
    disableScroll();
    return;
  }
  enableScroll();
};
