import FormValidation from './form';

function validateFormCallbackMini() {
  const formValidation = new FormValidation('#form-callback-mini');

  formValidation.validateOnSubmit();
}

export default validateFormCallbackMini;
