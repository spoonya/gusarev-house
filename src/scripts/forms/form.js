import Swal from 'sweetalert2';

const classes = {
  error: 'error',
  errorEl: 'form__error',
  formControlEl: 'form__control',
  success: 'success'
};

const errors = {
  emptyEmail: 'Введите E-mail',
  emptyMsg: 'Введите сообщение',
  emptyName: 'Введите имя',
  emptyPhone: 'Введите номер',
  invalidEmail: 'Некорректный E-mail',
  invalidPhone: 'Введите номер в формате +375',
  maxMessageLength: 'Не более 250 символов',
  minMessageLength: 'Не менее 16 символов',
  unchecked: 'Поле должно быть отмечено'
};

class FormValidation {
  constructor({ form, formElements, isModal = false }) {
    this.form = form;
    this.formElements = formElements;
    this.isModal = isModal;
  }

  _validateEmail(email) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    return regex.test(String(email).toLowerCase());
  }

  _validatePhone(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\s+/g, '');

    if (phoneNumber.split('')[0] !== '+') {
      phoneNumber = `+${phoneNumber}`;
    }

    this.formElements.userPhone.value = phoneNumber;

    const regex = /(\+375)(((33|29|44|25|\d{2,4})))(\d{6,7}$)/g;

    return regex.test(String(phoneNumber));
  }

  _selectFormControl(input) {
    return input.closest(`.${classes.formControlEl}`);
  }

  _setError(input, message) {
    const formControl = this._selectFormControl(input);
    const error = formControl.querySelector(`.${classes.errorEl}`);

    error.textContent = message;
    formControl.classList.remove(classes.success);
    formControl.classList.add(classes.error);
  }

  _setSuccess(input) {
    const formControl = this._selectFormControl(input);

    formControl.classList.remove(classes.error);
    formControl.classList.add(classes.success);
  }

  _checkUsername(username, usernameValue) {
    if (!usernameValue) {
      this._setError(username, errors.emptyName);

      return false;
    }

    this._setSuccess(username);

    return true;
  }

  _checkUserPhone(userPhone, userPhoneValue) {
    if (!userPhoneValue) {
      this._setError(userPhone, errors.emptyPhone);

      return false;
    }

    if (userPhoneValue && !this._validatePhone(userPhoneValue)) {
      this._setError(userPhone, errors.invalidPhone);

      return false;
    }

    this._setSuccess(userPhone);

    return true;
  }

  _checkUserEmail(userEmail, userEmailValue, isRequired = false) {
    if (isRequired && !userEmailValue) {
      this._setError(userEmail, errors.emptyEmail);

      return false;
    }

    if (userEmailValue && !this._validateEmail(userEmailValue)) {
      this._setError(userEmail, errors.invalidEmail);

      return false;
    }

    this._setSuccess(userEmail);

    return true;
  }

  _checkUserMessage(userMessage, userMessageValue, isRequired = false) {
    const maxMessageLength = 250;
    const minMessageLength = 16;

    if (isRequired && !userMessageValue) {
      this._setError(userMessage, errors.emptyMsg);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
      this._setError(userMessage, errors.maxMessageLength);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length < minMessageLength) {
      this._setError(userMessage, errors.minMessageLength);

      return false;
    }

    this._setSuccess(userMessage);

    return true;
  }

  _checkAgreement(checkbox) {
    if (!checkbox.checked) {
      this._setError(checkbox, errors.unchecked);

      return false;
    }

    this._setSuccess(checkbox);

    return true;
  }

  _showAlert() {
    Swal.fire({
      text: 'Ваша заявка успешно отправлена',
      icon: 'success',
      confirmButtonText: 'ок'
    });
  }

  _clearInputs() {
    Object.values(this.formElements).forEach((input) => {
      input.value = '';

      if (input.type === 'checkbox') {
        input.checked = false;
      }

      this._selectFormControl(input).classList.remove(
        classes.success,
        classes.error
      );
    });
  }

  validateOnSubmit(config) {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      const isValid = [];

      if (config.username && config.username.isCheck) {
        isValid.push(
          this._checkUsername(
            this.formElements.username,
            this.formElements.username.value.trim()
          )
        );
      }

      if (config.userPhone && config.userPhone.isCheck) {
        isValid.push(
          this._checkUserPhone(
            this.formElements.userPhone,
            this.formElements.userPhone.value.trim()
          )
        );
      }

      if (config.userEmail && config.userEmail.isCheck) {
        isValid.push(
          this._checkUserEmail(
            this.formElements.userEmail,
            this.formElements.userEmail.value.trim(),
            config.userEmail.isRequired
          )
        );
      }

      if (config.userMessage && config.userMessage.isCheck)
        isValid.push(
          this._checkUserMessage(
            this.formElements.userMsg,
            this.formElements.userMsg.value.trim(),
            config.userMessage.isRequired
          )
        );

      if (config.userAgreement && config.userAgreement.isCheck) {
        isValid.push(this._checkAgreement(this.formElements.userAgreement));
      }

      if (isValid.includes(false)) {
        e.preventDefault();

        return;
      }

      this._showAlert();
      this._clearInputs();
    });
  }
}

export default FormValidation;
