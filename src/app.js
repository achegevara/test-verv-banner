import "./styles/app.scss";

// slider
let allSlides = document.querySelectorAll(".review");
let slider = document.querySelector(".review-area");
let sliderLine = document.querySelector(".review-line");
let count = 0;

slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        clearInterval(autoScroll);
        if (xDiff > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
    x1 = null;
    y1 = null;
}

function nextSlide() {
    count++;
    if (count >= allSlides.length) {
        count = 0;
    }
    rollSlider();
}

function prevSlide() {
    count--;
    if (count < 0) {
        count = allSlides.length - 1;
    }
    rollSlider();
}

function rollSlider() {
    let width = document.querySelector(".review").offsetWidth;
    sliderLine.style.transform = 'translate(-' + count * (width + 5) + 'px)';
}

let autoScroll = setInterval(nextSlide, 5000);

// subscription buttons
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

// "Continue" button
let continueButton = document.querySelector(".main-block__continue-btn");
continueButton.addEventListener("click", () => {
    let subSelect = continueButton.closest(".main-block").querySelector(".main-block__sub-select").querySelector(".main-block__sub_selected");
    if (subSelect.classList.contains("main-block__sub_1")) {
        window.open("https://www.google.com/search?q=1");
    } else if
        (subSelect.classList.contains("main-block__sub_12")) {
        window.open("https://www.google.com/search?q=2");
    } else if
        (subSelect.classList.contains("main-block__sub_3")) {
        window.open("https://www.google.com/search?q=3");
    }
});
