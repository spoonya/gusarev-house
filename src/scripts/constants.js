const CLASSES = {
  active: 'active',
  absolute: 'absolute',
  fixed: 'fixed',
  loading: 'loading',
  headerDark: 'header--dark',
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
  header: document.querySelector('#header'),
  headerBot: document.querySelector('#header-bottom'),
  modal: document.querySelector('#modal'),
  modalContent: document.querySelector('#modal-content'),
  overlay: document.querySelector('#overlay')
};

export { CLASSES, DOM, IDs };
