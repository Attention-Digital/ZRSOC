
const resetPasswordLink = document.querySelector('[data-ms-modal="forgot-password"]');

// Add a click event listener to the link
resetPasswordLink.addEventListener("click", function () {
  // Use a timeout to wait for the modal to load
  setTimeout(function () {
    // Select the text and button inside the modal
    const modalText = document.querySelector(".ms-modal__text");
    const modalButton = document.querySelector(".ms-form__button");

    // Check if the modal elements exist
    if (modalText && modalButton) {
        // Update the text and button label
        modalText.textContent = "We’ll email you a 6-digit code to reset your password.";
        modalButton.textContent = "Send Code";
    }
  }, 100); // Adjust delay if needed
});
