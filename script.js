let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
    resetAutoPlay();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
    resetAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
        resetAutoPlay();
    });
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

let autoPlay = setInterval(moveToNextSlide, 3000);

function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(moveToNextSlide, 3000);
}
