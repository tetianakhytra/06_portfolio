/** @format */

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
});
