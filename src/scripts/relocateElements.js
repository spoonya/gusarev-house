import { DOM, CLASSES } from './constants';

import { isMediaBreakpoint } from './helpers';

const headerSocial = document.querySelector('#header-social');
const headerInfo = document.querySelector('#header-info');

function moveHeaderSocial() {
  if (!headerSocial) return;

  if (isMediaBreakpoint()) {
    DOM.headerBot.append(headerSocial);
    headerSocial.classList.add(CLASSES.active);

    return;
  }

  if (!headerInfo.contains(headerSocial)) {
    headerInfo.prepend(headerSocial);
    headerSocial.classList.remove(CLASSES.active);
  }
}

function relocateElements() {
  moveHeaderSocial();
}

window.addEventListener('resize', relocateElements);

export default relocateElements;
