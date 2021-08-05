import { CLASSES, DOM } from '../constants';
import { isMediaBreakpoint } from '../helpers';

const burger = document.querySelector('#burger');
const headerBotWrapper = document.querySelector('#header-bot-wrapper');
const menuLinks = document.querySelectorAll('#menu a');

function isBurgerOpened() {
  if (burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

function toggleBurger() {
  burger.addEventListener('click', () => {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    burger.classList.toggle(CLASSES.active);
    headerBotWrapper.classList.toggle(CLASSES.active);

    if (DOM.header.classList.contains(CLASSES.absolute)) {
      DOM.header.classList.toggle(CLASSES.headerDark);
    }
  });
}

function removeBurger() {
  DOM.body.classList.remove(CLASSES.scrollHidden);
  burger.classList.remove(CLASSES.active);
  headerBotWrapper.classList.remove(CLASSES.active);

  if (DOM.header.classList.contains(CLASSES.absolute)) {
    DOM.header.classList.remove(CLASSES.headerDark);
  }
}

function removeBurgerOnMedia() {
  if (!isMediaBreakpoint()) removeBurger();
}

function controlBurger() {
  toggleBurger();

  menuLinks.forEach((link) => {
    link.addEventListener('click', removeBurger);
  });
}

window.addEventListener('resize', removeBurgerOnMedia);

export default controlBurger;
export { isBurgerOpened, removeBurgerOnMedia };
