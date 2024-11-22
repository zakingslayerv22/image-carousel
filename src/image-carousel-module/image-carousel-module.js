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
    this.resetCurrentIndexForNextSlide();

    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${(this.currentSlideIndex + 1) * -100}%)`;
    });

    this.currentSlideIndex++;
  }

  resetCurrentIndexForNextSlide() {
    if (this.currentSlideIndex === this.allSlides.length - 1) {
      this.currentSlideIndex = -1;
    }
  }

  previousSlide() {
    this.resetCurrentIndexForPreviousSlide();

    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${(this.currentSlideIndex - 1) * -100}%)`;
    });

    this.currentSlideIndex--;
  }

  resetCurrentIndexForPreviousSlide() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = 3;
    }
  }
}
