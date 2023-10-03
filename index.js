document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;

    function showSlide(slideIndex) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    showSlide(currentSlide);
    startSlideInterval(); // Inicia o intervalo automaticamente

    const nextButton = document.querySelector("#nextButton");
    const prevButton = document.querySelector("#prevButton");

    nextButton.addEventListener("click", () => {
        nextSlide();
        stopSlideInterval();
        startSlideInterval();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        stopSlideInterval();
        startSlideInterval();
    });
});
