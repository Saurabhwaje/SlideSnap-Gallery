document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const thumbnails = document.querySelectorAll('.thumbnail');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => (slide.classList.remove('active')));
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    document.querySelector('.slideshow').addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000);
});
