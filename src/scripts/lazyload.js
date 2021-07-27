import lozad from 'lozad';

require('intersection-observer');

const lazyLoadObserver = lozad();
lazyLoadObserver.observer.POLL_INTERVAL = 100;

export default lazyLoadObserver;
