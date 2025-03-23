document.addEventListener("DOMContentLoaded", () => {

  const modal = document.querySelector(".modal")
  const noBtn = document.querySelector(".modal__button--no")
  const yesBtn = document.querySelector(".modal__button--yes")
  const backdrop = document.querySelector(".modal__backdrop")
  const modalContent = document.querySelector(".modal__content")
  const modalTitle = document.querySelector(".modal__title")
  const modalText = document.querySelector(".modal__text")
  const modalButtons = document.querySelector(".modal__buttons")

 
  function closeModal() {
    modal.classList.remove("modal--active")
    modal.classList.remove("modal--fullscreen")
 
    if (modalContent.dataset.changed) {
      modalTitle.textContent = modalContent.dataset.originalTitle
      modalText.textContent = modalContent.dataset.originalText
      modalButtons.style.display = "flex"
      delete modalContent.dataset.changed
    }
  }

  function expandModal() {
   
    if (!modalContent.dataset.changed) {
      modalContent.dataset.originalTitle = modalTitle.textContent
      modalContent.dataset.originalText = modalText.textContent
      modalContent.dataset.changed = "true"
    }

    modal.classList.add("modal--fullscreen")

    modalTitle.textContent = "Course completed successfully"
    modalText.textContent = "No further changes can be made."

    modalButtons.style.display = "none"
  }

  noBtn.addEventListener("click", () => {
    console.log("User clicked No")
    closeModal()
  })

  yesBtn.addEventListener("click", () => {
    console.log("User clicked Yes")
    expandModal()
    
  })

  backdrop.addEventListener("click", closeModal)

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("modal--active")) {
      closeModal()
    }
  })
})
