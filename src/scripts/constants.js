const CLASSES = {
  active: 'active',
  fixed: 'fixed',
  loading: 'loading',
  scrollHidden: 'scroll-hidden'
};

const IDs = {
  formAlert: '#form-alert',
  formCallMe: '#form-callme',
  formRequest: '#form-request',
  modal: '#modal',
  modalYouTube: '#modal-youtube'
};

const DOM = {
  body: document.querySelector('body'),
  modal: document.querySelector('#modal'),
  modalContent: document.querySelector('#modal-content'),
  overlay: document.querySelector('#overlay')
};

export { CLASSES, DOM, IDs };
