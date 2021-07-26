import FormValidation from './form';

function validateFormCatalog() {
  const formValidation = new FormValidation('#form-catalog');

  formValidation.validateOnSubmit({
    userEmail: { isRequired: false }
  });
}

export default validateFormCatalog;
