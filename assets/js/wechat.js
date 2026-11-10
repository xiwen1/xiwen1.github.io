document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("wechat-modal");
  const triggers = document.querySelectorAll(".wechat-trigger");

  if (!modal || triggers.length === 0) return;

  const closeButton = modal.querySelector(".wechat-modal__close");
  let activeTrigger = null;

  const openModal = (trigger) => {
    activeTrigger = trigger;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
    document.body.classList.add("wechat-modal-open");
    closeButton?.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("wechat-modal-open");

    if (activeTrigger) {
      activeTrigger.setAttribute("aria-expanded", "false");
      activeTrigger.focus();
      activeTrigger = null;
    }
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger));
  });

  closeButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
