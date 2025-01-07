const resetPasswordLink = document.querySelector('[data-ms-modal="forgot-password"]');

resetPasswordLink.addEventListener("click", function () {
  const updateModal = () => {
    const modalText = document.querySelector(".ms-modal__text");
    const modalButton = document.querySelector(".ms-form__button");
    
    if (modalText && modalButton) {
      modalText.textContent = "We'll email you a 6-digit code to reset your password.";
      modalButton.textContent = "Send Code";
      return true;
    }
    return false;
  };

  // Try immediately
  if (!updateModal()) {
    // If failed, retry with increasing delays
    [100, 300, 500].forEach(delay => {
      setTimeout(updateModal, delay);
    });
  }
});
