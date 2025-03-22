document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const noBtn = document.querySelector('.modal__button--no');
  const yesBtn = document.querySelector('.modal__button--yes');
  const backdrop = document.querySelector('.modal__backdrop');

  function closeModal() {
    modal.classList.remove('modal--active');
    modal.classList.remove('modal--fullscreen');
  }

  function expandModal() {
    modal.classList.add('modal--fullscreen');
  }

  noBtn.addEventListener('click', () => {
    console.log('User clicked No');
    closeModal();
  });

  yesBtn.addEventListener('click', () => {
    console.log('User clicked Yes');
    expandModal();
  });

  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
});
