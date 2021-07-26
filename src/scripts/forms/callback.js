import FormValidation from './form';

function validateFormCallback() {
  const formValidation = new FormValidation('#form-callback');

  formValidation.validateOnSubmit({
    userEmail: { isRequired: false },
    userMsg: { isRequired: false }
  });
}

export default validateFormCallback;
