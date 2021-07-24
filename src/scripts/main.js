import * as sliders from './sliders';
import lazyLoadObserver from './lazyload';
import { validateFormCatalog } from './forms';

lazyLoadObserver.observe();

validateFormCatalog();
