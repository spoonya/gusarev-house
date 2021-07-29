import Swal from 'sweetalert2';

class FormValidation {
  constructor(selector, { isModal } = { isModal: false }) {
    this.classes = {
      error: 'error',
      errorEl: 'form__error',
      formControlEl: 'form__control',
      success: 'success'
    };

    this.errors = {
      emptyEmail: 'Введите E-mail',
      emptyMsg: 'Введите сообщение',
      emptyName: 'Введите имя',
      emptyPhone: 'Введите номер',
      invalidEmail: 'Некорректный E-mail',
      invalidPhone: 'Введите номер в формате +375',
      maxMessageLength: 'Не более 250 символов',
      minMessageLength: 'Не менее 8 символов',
      unchecked: 'Поле должно быть отмечено'
    };

    this.form = document.querySelector(selector);
    if (!this.form) return;

    this.formElements = {
      username: this.form.querySelector('[data-form-name]'),
      userPhone: this.form.querySelector('[data-form-phone]'),
      userEmail: this.form.querySelector('[data-form-email]'),
      userMsg: this.form.querySelector('[data-form-message]'),
      userAgreement: this.form.querySelector('[data-form-agreement]')
    };

    this.defaultConfig = {
      username: {
        isRequired: true
      },
      userPhone: {
        isRequired: true
      },
      userEmail: {
        isRequired: true
      },
      userMsg: {
        isRequired: true
      }
    };

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
    return input.closest(`.${this.classes.formControlEl}`);
  }

  _setError(input, message) {
    const formControl = this._selectFormControl(input);
    const error = formControl.querySelector(`.${this.classes.errorEl}`);

    error.textContent = message;
    formControl.classList.remove(this.classes.success);
    formControl.classList.add(this.classes.error);
  }

  _setSuccess(input) {
    const formControl = this._selectFormControl(input);

    formControl.classList.remove(this.classes.error);
    formControl.classList.add(this.classes.success);
  }

  _checkUsername(
    username,
    usernameValue,
    { isRequired } = this.defaultConfig.username
  ) {
    if (isRequired && !usernameValue) {
      this._setError(username, this.errors.emptyName);

      return false;
    }

    this._setSuccess(username);

    return true;
  }

  _checkUserPhone(
    userPhone,
    userPhoneValue,
    { isRequired } = this.defaultConfig.userPhone
  ) {
    if (isRequired && !userPhoneValue) {
      this._setError(userPhone, this.errors.emptyPhone);

      return false;
    }

    if (userPhoneValue && !this._validatePhone(userPhoneValue)) {
      this._setError(userPhone, this.errors.invalidPhone);

      return false;
    }

    this._setSuccess(userPhone);

    return true;
  }

  _checkUserEmail(
    userEmail,
    userEmailValue,
    { isRequired } = this.defaultConfig.userEmail
  ) {
    if (isRequired && !userEmailValue) {
      this._setError(userEmail, this.errors.emptyEmail);

      return false;
    }

    if (userEmailValue && !this._validateEmail(userEmailValue)) {
      this._setError(userEmail, this.errors.invalidEmail);

      return false;
    }

    this._setSuccess(userEmail);

    return true;
  }

  _checkUserMessage(
    userMessage,
    userMessageValue,
    { isRequired } = this.defaultConfig.userMsg
  ) {
    const maxMessageLength = 250;
    const minMessageLength = 8;

    if (isRequired && !userMessageValue) {
      this._setError(userMessage, this.errors.emptyMsg);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
      this._setError(userMessage, this.errors.maxMessageLength);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length < minMessageLength) {
      this._setError(userMessage, this.errors.minMessageLength);

      return false;
    }

    this._setSuccess(userMessage);

    return true;
  }

  _checkAgreement(checkbox) {
    if (!checkbox.checked) {
      this._setError(checkbox, this.errors.unchecked);

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
        this.classes.success,
        this.classes.error
      );
    });
  }

  validateOnSubmit(userConfig = {}) {
    if (!this.form) return;

    const config = { ...this.defaultConfig, ...userConfig };
    const isValid = [];

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.formElements.username) {
        isValid.push(
          this._checkUsername(
            this.formElements.username,
            this.formElements.username.value.trim(),
            config.username
          )
        );
      }

      if (this.formElements.userPhone) {
        isValid.push(
          this._checkUserPhone(
            this.formElements.userPhone,
            this.formElements.userPhone.value.trim(),
            config.userPhone
          )
        );
      }

      if (this.formElements.userEmail) {
        isValid.push(
          this._checkUserEmail(
            this.formElements.userEmail,
            this.formElements.userEmail.value.trim(),
            config.userEmail
          )
        );
      }

      if (this.formElements.userMsg)
        isValid.push(
          this._checkUserMessage(
            this.formElements.userMsg,
            this.formElements.userMsg.value.trim(),
            config.userMsg
          )
        );

      if (this.formElements.userAgreementg) {
        isValid.push(this._checkAgreement(this.formElements.userAgreement));
      }

      if (isValid.includes(false)) {
        return;
      }

      this._clearInputs();
    });
  }
}

export default FormValidation;
