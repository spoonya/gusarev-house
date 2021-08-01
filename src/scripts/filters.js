function addClickEvtToFilters() {
  const filter = document.querySelector('#filter');

  if (!filter) return;

  let activeBtn = filter.querySelector('ul button');
  activeBtn.classList.add('active');

  filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (!e.target.classList.contains('active')) {
      e.target.classList.add('active');

      activeBtn.classList.remove('active');

      activeBtn = e.target;
    }
  });
}

export default addClickEvtToFilters;
