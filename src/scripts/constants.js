const CLASSES = {
  active: 'active',
  fixed: 'fixed',
  scrollHidden: 'scroll-hidden'
};

const IDs = {
  modal: '#modal',
  formCallMe: '#form-callme',
  formRequest: '#form-request',
  formAlert: '#form-alert',
  modalYouTube: '#modal-youtube'
};

const DOM = {
  body: document.querySelector('body'),
  overlay: document.querySelector('#overlay'),
  modal: document.querySelector('#modal'),
  modalContent: document.querySelector('#modal-content')
};

export { CLASSES, DOM, IDs };
