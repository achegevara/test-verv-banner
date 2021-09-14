// Функционал кнопок подписки.
let subButtons = document.querySelectorAll(".main-block__sub");
for (let sub of subButtons) {
    sub.addEventListener("click", (event) => {
        for (let item of subButtons) {
            item.classList.remove("main-block__sub_selected");
        }
        sub.classList.add("main-block__sub_selected");
    }
    );
}
