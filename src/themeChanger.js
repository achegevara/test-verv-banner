// Переключатель темы, для демонстрации переключателем сделал "крестик" закрытия баннера.
document.querySelector(".top-block__close-bg").addEventListener("click", (event) => {
    event.currentTarget.closest("html").hasAttribute("data-theme-dark")
    ? event.currentTarget.closest("html").removeAttribute("data-theme-dark")
    : event.currentTarget.closest("html").setAttribute("data-theme-dark", "data-theme-dark");
});
