export class ImageCarousel {
  constructor() {
    this.allSlides = document.querySelectorAll(".slide");

    this.allDots = document.querySelectorAll(".dot");

    [this.dotOne, this.dotTwo, this.dotThree] = [...this.allDots];

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

    this.dotOne.addEventListener("click", () => {
      this.removeActiveClassFromAllDots();
      this.addActiveClassToDotByIndex(0);
      this.resetToSlide(0);
    });

    this.dotTwo.addEventListener("click", () => {
      this.removeActiveClassFromAllDots();
      this.addActiveClassToDotByIndex(1);
      this.resetToSlide(1);
    });

    this.dotThree.addEventListener("click", () => {
      this.removeActiveClassFromAllDots();
      this.addActiveClassToDotByIndex(2);
      this.resetToSlide(2);
    });
  }

  nextSlide() {
    this.resetCurrentIndexForNextSlide();
    this.removeActiveClassFromAllDots();
    this.addActiveClassToCurrentDotForNextSlide();

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

  addActiveClassToCurrentDotForNextSlide() {
    this.allDots[this.currentSlideIndex + 1].classList.add("active");
  }

  previousSlide() {
    this.resetCurrentIndexForPreviousSlide();

    this.removeActiveClassFromAllDots();
    this.addActiveClassToCurrentDotForPreviousSlide();

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

  addActiveClassToCurrentDotForPreviousSlide() {
    this.allDots[this.currentSlideIndex - 1].classList.add("active");
  }

  removeActiveClassFromAllDots() {
    this.allDots.forEach((dot) => dot.classList.remove("active"));
  }

  resetToSlide(index) {
    this.allSlides.forEach((slide) => {
      slide.style.transform = `translate(${index * -100}%)`;
    });

    this.currentSlideIndex = index;
  }

  addActiveClassToDotByIndex(dotIndex) {
    this.allDots[dotIndex].classList.add("active");
  }
}
