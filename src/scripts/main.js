/* eslint-disable no-unused-vars */
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

lazyLoadObserver.observe();

validateFormCatalog();
validateFormCallback();
validateFormCallbackMini();

spoilerWebuild.init();

addClickEvtToFilters();

controlModal();
