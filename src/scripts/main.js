/* eslint-disable no-unused-vars */
import lazyLoadObserver from './lazyload';
import * as sliders from './sliders';
import { spoilerWebuild } from './spoilers';
import { validateFormCatalog, validateFormCallback } from './forms';

require('intersection-observer');

IntersectionObserver.prototype.POLL_INTERVAL = 100;

lazyLoadObserver.observe();

validateFormCatalog();
validateFormCallback();

spoilerWebuild.init();
