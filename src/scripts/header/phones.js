import { isMobile } from '../helpers';
import { DOM, CLASSES } from '../constants';

const phonesSubList = document.querySelector('#header-phones ul');
const phonesArrow = document.querySelector('#header-phones svg');

function onClickAway() {
  document.addEventListener('click', (e) => {
    if (!phonesSubList.classList.contains(CLASSES.active)) return;

    if (e.target !== phonesArrow) {
      phonesSubList.classList.remove(CLASSES.active);
      phonesArrow.classList.remove(CLASSES.active);
    }
  });
}

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

    addClickEvtToArrow();
    onClickAway();
  }
}

export default controlPhonesList;
