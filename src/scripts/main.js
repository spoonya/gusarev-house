/* eslint-disable no-unused-vars */
import lazyLoadObserver from './lazyload';
import * as sliders from './sliders';
import { spoilerWebuild } from './spoilers';
import { validateFormCatalog, validateFormCallback } from './forms';

lazyLoadObserver.observe();

validateFormCatalog();
validateFormCallback();

spoilerWebuild.init();
