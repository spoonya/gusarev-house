import { DOM } from './constants';

import { isMediaBreakpoint } from './helpers';

const headerSocial = document.querySelector('#header-social');
const headerInfo = document.querySelector('#header-info');

function moveHeaderSocial() {
  if (!headerSocial) return;

  if (isMediaBreakpoint()) {
    DOM.headerBot.append(headerSocial);

    return;
  }

  if (!headerInfo.contains(headerSocial)) {
    headerInfo.prepend(headerSocial);
  }
}

function relocateElements() {
  moveHeaderSocial();
}

window.addEventListener('resize', relocateElements);

export default relocateElements;
