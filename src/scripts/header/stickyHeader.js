import { DOM, CLASSES } from '../constants';
import { isMediaBreakpoint } from '../helpers';

function lockLightHeader() {
  if (!DOM.header.classList.contains(CLASSES.absolute)) return;

  const offset = 10;

  window.addEventListener('scroll', () => {
    if (!isMediaBreakpoint()) {
      DOM.header.classList.add(CLASSES.absolute);
      DOM.header.classList.remove(CLASSES.fixed, CLASSES.headerDark);

      return;
    }

    DOM.header.classList.toggle(CLASSES.absolute, window.pageYOffset < offset);

    DOM.header.classList.toggle(CLASSES.fixed, window.pageYOffset > offset);
    DOM.header.classList.toggle(
      CLASSES.headerDark,
      window.pageYOffset > offset
    );
  });
}

export default lockLightHeader;
