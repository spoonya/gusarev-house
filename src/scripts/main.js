import * as sliders from './sliders';
import { spoilerWebuild } from './spoilers';
import lazyLoadObserver from './lazyload';
import { validateFormCatalog } from './forms';

lazyLoadObserver.observe();

validateFormCatalog();
