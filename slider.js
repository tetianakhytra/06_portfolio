/** @format */

const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const arrowsBehaviour = (wipePrevBtn, wipeNextBtn, index) => {
  if (index === 0) {
    wipePrevBtn.classList.add("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  } else if (index === wipes.length - 1) {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  }
};

const wipeSlide = (wiperTrack, activeSlide, targetIndex) => {
  if (targetIndex < 0 || targetIndex >= wipes.length) return; // Prevent invalid indices

  // Correct transform calculation
  const translateX = targetIndex * (wipeWidth + 46); // Slide width + spacing
  wiperTrack.style.transform = `translateX(-${translateX}px)`;

  // Update all slides
  wipes.forEach((slide, index) => {
    if (index === targetIndex) {
      // Active slide
      slide.classList.add("active-swipe");
      slide.style.transform = "scale(1.1)";
      slide.style.filter = "none"; // No grayscale for active
    } else {
      // Non-active slides
      slide.classList.remove("active-swipe");
      slide.style.transform = "scale(1)";
      slide.style.filter = "grayscale(5)"; // Apply grayscale for non-active
    }
  });
};

wipeNextBtn.addEventListener("click", () => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const currentIndex = wipes.findIndex((slide) => slide === activeSlide);

  // Ensure the next slide is within bounds
  const targetIndex = Math.min(currentIndex + 1, wipes.length - 1);

  wipeSlide(wiperTrack, activeSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});

wipePrevBtn.addEventListener("click", () => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const currentIndex = wipes.findIndex((slide) => slide === activeSlide);

  // Ensure the previous slide is within bounds
  const targetIndex = Math.max(currentIndex - 1, 0);

  wipeSlide(wiperTrack, activeSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});

// Ensure the first image is the active slide on load
window.addEventListener("DOMContentLoaded", () => {
  const firstSlide = wipes[0];
  firstSlide.classList.add("active-swipe");
  firstSlide.style.transform = "scale(1.1)";
  firstSlide.style.filter = "none"; // Remove grayscale for the first slide

  // Apply grayscale to all non-active slides
  wipes.slice(1).forEach((slide) => (slide.style.filter = "grayscale(5)"));

  // Hide the previous button initially
  wipePrevBtn.classList.add("is-hidden");
});
