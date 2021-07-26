import FormValidation from './form';

function validateFormCatalog() {
  const form = document.querySelector('#form-catalog');

  if (!form) return;

  const formElements = {
    username: document.querySelector('#form-catalog-name'),
    userPhone: document.querySelector('#form-catalog-phone'),
    userEmail: document.querySelector('#form-catalog-email')
  };

  const formValidation = new FormValidation({
    form,
    formElements
  });

  formValidation.validateOnSubmit({
    username: { isCheck: true },
    userPhone: { isCheck: true },
    userEmail: { isCheck: true, isRequired: false }
  });
}

export default validateFormCatalog;
