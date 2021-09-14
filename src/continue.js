// Функционал кнопки "Continue"
let continueButton = document.querySelector(".main-block__continue-btn");
continueButton.addEventListener("click", () => {
    let subSelect = continueButton.closest(".main-block").querySelector(".main-block__sub-select").querySelector(".main-block__sub_selected");
    window.open(subSelect.dataset.href);
});
