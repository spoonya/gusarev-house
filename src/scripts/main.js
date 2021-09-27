/* eslint-disable no-unused-vars */
import 'core-js/es6/promise';
import 'regenerator-runtime/runtime';
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
import controlBurger from './header/burger';
import relocateElements from './relocateElements';
import { controlPhonesList } from './header';

lazyLoadObserver.observe();

controlPhonesList();
controlModal();
controlBurger();

validateFormCatalog();
validateFormCallback();
validateFormCallbackMini();

spoilerWebuild.init();

addClickEvtToFilters();

initPanzoom();

relocateElements();
