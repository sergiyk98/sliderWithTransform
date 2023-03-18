// const slider = document.querySelector('.slider'),
//    prevButton = document.querySelector('.prev-button'),
//    nextButton = document.querySelector('.next-button'),
//    slideWidth = slider.clientWidth;

// console.log(slideWidth);

// let currentSlide = 0;

// nextButton.addEventListener('click', () => {
//    currentSlide++;
//    if (currentSlide > slider.childElementCount - 1) {
//       currentSlide = 0;
//    }
//    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// });

// prevButton.addEventListener('click', () => {
//    currentSlide--;
//    if (currentSlide < 0) {
//       currentSlide = slider.childElementCount - 1;
//    }
//    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// });

const slider = document.querySelector('.slider'),
   prevButton = document.querySelector('.prev-button'),
   nextButton = document.querySelector('.next-button'),
   sliderNumbers = document.querySelector('.slider-numbers'),
   slideWidth = slider.clientWidth;

console.log(slideWidth);

let currentSlide = 0;

sliderNumbers.innerText = `${currentSlide + 1} / ${slider.childElementCount}`;

nextButton.addEventListener('click', () => {
   currentSlide++;
   if (currentSlide > slider.childElementCount - 1) {
      currentSlide = 0;
   }
   slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
   sliderNumbers.innerText = `${currentSlide + 1} / ${slider.childElementCount}`;
});

prevButton.addEventListener('click', () => {
   currentSlide--;
   if (currentSlide < 0) {
      currentSlide = slider.childElementCount - 1;
   }
   slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
   sliderNumbers.innerText = `${currentSlide + 1} / ${slider.childElementCount}`;
});