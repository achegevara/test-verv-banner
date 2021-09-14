// Функционал слайдера.
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
