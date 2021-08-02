/* eslint-disable no-unused-vars */
import { Fancybox } from '@fancyapps/ui';
import lazyLoadObserver from './lazyload';
import * as sliders from './sliders';
import { spoilerWebuild } from './spoilers';
import {
  validateFormCatalog,
  validateFormCallback,
  validateFormCallbackMini
} from './forms';
import addClickEvtToFilters from './filters';
import controlModal from './modal';
import initPanzoom from './panzoom';

lazyLoadObserver.observe();

validateFormCatalog();
validateFormCallback();
validateFormCallbackMini();

spoilerWebuild.init();

addClickEvtToFilters();

controlModal();

initPanzoom();
