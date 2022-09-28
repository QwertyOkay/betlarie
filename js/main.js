(() => {
    const refs = {
        openModalBtn5: document.querySelector('[data-modal-open5]'),
        closeModalBtn5: document.querySelector('[data-modal-close5]'),
        modal5: document.querySelector('[data-modal5]'),
      };

    refs.openModalBtn5.addEventListener('click', toggleModal5);
    refs.closeModalBtn5.addEventListener('click', toggleModal5);
  
  function toggleModal5() {
    refs.modal5.classList.toggle('is-hidden5');
    }

  })();
  