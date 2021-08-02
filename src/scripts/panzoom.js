/* eslint-disable no-new */
import { Panzoom } from '@fancyapps/ui';

function initPanzoom() {
  const panzoomList = document.querySelectorAll('.panzoom');

  if (!panzoomList.length) return;

  panzoomList.forEach((item) => {
    new Panzoom(item, { wheel: false });
  });
}

export default initPanzoom;
