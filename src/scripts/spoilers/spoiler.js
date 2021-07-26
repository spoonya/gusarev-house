class Spoiler {
  constructor(selector) {
    this.spoilers = document.querySelectorAll(selector);
  }

  _isSpoilerOpen(spoiler) {
    if (!spoiler.open) return false;

    return true;
  }

  _renameLabel(label, isOpen) {
    if (isOpen) {
      label.textContent = 'скрыть';
    } else {
      label.textContent = 'подробнее';
    }
  }

  _renameOnClick() {
    this.spoilers.forEach((spoiler) => {
      const summary = spoiler.querySelector('summary');
      const label = spoiler.querySelector('span');

      summary.addEventListener('click', () => {
        this._renameLabel(label, !this._isSpoilerOpen(spoiler));
      });
    });
  }

  _controlSpoilerLabel() {
    this.spoilers.forEach((spoiler) => {
      const label = spoiler.querySelector('span');

      this._renameLabel(label, this._isSpoilerOpen(spoiler));
    });
  }

  init() {
    if (!this.spoilers.length) return;

    this._renameOnClick();
    this._controlSpoilerLabel();
  }
}

export default Spoiler;
