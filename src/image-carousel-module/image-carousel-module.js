export class ImageCarousel {
  constructor() {
    this.allSlides = document.querySelectorAll(".slide");
    this.currentSlideIndex = 0;

    if (this.allSlides.length > 1) this.initialize();
  }

  initialize() {
    this.handleClicks();
  }

  handleClicks() {
    const previousButton = document.querySelector(".previous-button");
    const nextButton = document.querySelector(".next-button");

    nextButton.addEventListener("click", () => {
      this.nextSlide();
    });

    previousButton.addEventListener("click", () => {
      this.previousSlide();
    });
  }

  nextSlide() {
    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${(this.currentSlideIndex + 1) * -100}%)`;
    });

    this.currentSlideIndex++;
  }

  previousSlide() {
    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${(this.currentSlideIndex - 1) * -100}%)`;
    });

    this.currentSlideIndex--;
  }
}
