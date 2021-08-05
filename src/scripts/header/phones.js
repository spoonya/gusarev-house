import { isMobile } from '../helpers';
import { DOM, CLASSES } from '../constants';

const phonesSubList = document.querySelector('#header-phones ul');
const phonesArrow = document.querySelector('#header-phones svg');

function addClickEvtToArrow() {
  if (!phonesArrow) return;

  phonesArrow.addEventListener('click', () => {
    phonesSubList.classList.toggle(CLASSES.active);
    phonesArrow.classList.toggle(CLASSES.active);
  });
}

function controlPhonesList() {
  if (isMobile()) {
    DOM.body.classList.add('touch');
  }

  addClickEvtToArrow();
}

export default controlPhonesList;
