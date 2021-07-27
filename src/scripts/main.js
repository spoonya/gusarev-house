/* eslint-disable no-unused-vars */
import lozad from 'lozad';
import * as sliders from './sliders';
import { spoilerWebuild } from './spoilers';
import { validateFormCatalog, validateFormCallback } from './forms';

require('intersection-observer');

const lazyLoadObserver = lozad();
lazyLoadObserver.observer.POLL_INTERVAL = 100;
lazyLoadObserver.observe();

validateFormCatalog();
validateFormCallback();

spoilerWebuild.init();
