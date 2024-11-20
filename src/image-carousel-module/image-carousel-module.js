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
    const nextButton = document.querySelector(".next-button");

    nextButton.addEventListener("click", () => {
      this.nextSlide();
    });
  }

  nextSlide() {
    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${(this.currentSlideIndex + 1) * -100}%)`;
    });

    this.currentSlideIndex++;
  }
}
