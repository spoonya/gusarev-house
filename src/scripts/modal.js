import { validateFormCallbackModal } from './forms';
import { CLASSES, DOM, IDs } from './constants';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');

function createFormContent({ img, title, btnTxt }) {
  const formTemplate = `<div class="form-modal"><img class="form-modal__img" src="images/modals/${img}" alt="" />
    <form class="form" id="form-modal-callback" method="POST" action="#">
        ${title}
        <div class="form__inner">
            <div class="form__control"><span class="form__error"></span><input class="form__input" name="callme-name" type="text" placeholder="Ваше имя" data-form-name="data-form-name" /></div>
            <div class="form__control"><span class="form__error"></span><input class="form__input" name="callme-phone" type="text" placeholder="Ваш телефон" data-form-phone="data-form-phone" /></div>
            <button class="form__button">${btnTxt}
              <svg class="form__button-icon" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.333344 5.77142C0.333344 5.45501 0.568472 5.19351 0.873535 5.15213L0.958343 5.14642L13.4583 5.14642C13.8035 5.14642 14.0833 5.42625 14.0833 5.77142C14.0833 6.08784 13.8482 6.34933 13.5432 6.39072L13.4583 6.39642L0.958343 6.39642C0.613166 6.39642 0.333344 6.1166 0.333344 5.77142Z" />
                <path d="M7.97585 1.19399C7.73125 0.950437 7.7304 0.55471 7.97395 0.310107C8.19536 0.0877412 8.54253 0.0668222 8.7876 0.24784L8.85783 0.308204L13.8995 5.3282C14.1225 5.55028 14.1428 5.8987 13.9604 6.14377L13.8995 6.21395L8.85787 11.2348C8.61328 11.4784 8.21756 11.4775 7.97398 11.233C7.75255 11.0106 7.7331 10.6633 7.91515 10.419L7.97581 10.3491L12.5725 5.77085L7.97585 1.19399Z" />
                </svg>
              </button>
            <div class="form__control"><span class="form__error"></span><label class="form__checkbox-wrapper"><input class="form__checkbox" name="callme-agreement" type="checkbox" data-form-agreement="data-form-agreement" /><span class="form__checkbox-styled"></span><span class="form__checkbox-txt">Согласие на обработку персональных данных</span></label></div>
        </div>
    </form>
</div>`;

  return formTemplate;
}

const modalContent = {
  formCallme: createFormContent({
    img: 'house.png',
    title:
      '<h2 class="form-modal__title"><span>Перезвоним и проконсультируем&nbsp;</span>по всем вопросам</h2>',
    btnTxt: 'Перезвоните мне'
  }),
  formRequest: createFormContent({
    img: 'phone-1.png',
    title:
      '<h2 class="form-modal__title"><span>Оставить заявку&nbsp;</span>на индивидуальный проект</h2>',
    btnTxt: 'Отправить заявку'
  }),
  formAlert: `<div class="alert" id="#form-alert">
    <div class="alert__inner">
        <h2 class="alert__title">Спасибо! Ваш запрос отправлен.</h2>
        <h3 class="alert__subtitle"><span>А пока подпишитесь на наш Instagram,&nbsp;</span>там много интересного</h3><a class="alert__link" href="https://www.instagram.com/gusarev_house/" target="_blank" rel="noopener">@gusarev_house</a>
    </div><img class="alert__img" src="images/modals/phone-2.png" alt="" />
</div>`,
  video: `<div id="modal-youtube" class="video-section">
    <div class="video-block"><iframe class="video" src="https://www.youtube.com/embed/wBcik87jPVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>
</div>`
};

function closeModal() {
  DOM.modalContent.innerHTML = '';

  DOM.modal.classList.remove(CLASSES.active);
  DOM.overlay.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);
}

function createModal(html) {
  DOM.modalContent.innerHTML = '';
  DOM.modalContent.insertAdjacentHTML('afterbegin', html);
}

function openModal(modalTarget) {
  if (!modalTarget) return;

  switch (modalTarget) {
    case IDs.formCallMe:
      createModal(modalContent.formCallme);
      validateFormCallbackModal();
      break;

    case IDs.formRequest:
      createModal(modalContent.formRequest);
      validateFormCallbackModal();
      break;

    case IDs.formAlert:
      createModal(modalContent.formAlert);
      break;

    case IDs.modalYouTube:
      createModal(modalContent.video);
      break;

    default:
      break;
  }

  DOM.body.classList.add(CLASSES.scrollHidden);
  DOM.modal.classList.add(CLASSES.active);
  DOM.overlay.classList.add(CLASSES.active);
}

function controlModal() {
  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.modalTarget);
    });
  });

  DOM.overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(`${IDs.modal}.${CLASSES.active}`);

    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      closeModal();
    });
  });
}

export default controlModal;
export { openModal };