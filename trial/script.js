const carousel = document.querySelector('.carousel div');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0; // Current slide index
const items = document.querySelectorAll('.sell');
const totalItems = items.length;
const itemsPerView = 3; // Show 3 items at a time
const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

next.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const gap = parseInt(getComputedStyle(carousel).gap) || 0; // Get gap size
    const itemWidth = items[0].clientWidth + gap; // Account for gap in calculation
    const offset = currentIndex * itemWidth * itemsPerView; // Calculate offset for translation
    carousel.style.transform = `translateX(-${offset}px)`;

    // Enable/Disable buttons
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === maxIndex;
}

// Initial setup
updateCarousel();
