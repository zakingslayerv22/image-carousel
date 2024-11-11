export class ImageCarousel {
  constructor() {
    this.allImages = document.querySelectorAll(".slide");
    this.imagesArray = [...this.allImages];
    this.pictureFrame = document.querySelector(".picture-frame");
    this.index = 1;

    if (this.imagesArray.length > 1) this.initialize();
  }

  initialize() {
    this.pictureFrame.append(this.imagesArray[0]);
    this.handleClicks();
  }

  nextSlide() {
    if (this.index < this.imagesArray.length) {
      this.pictureFrame.textContent = "";
      this.pictureFrame.append(this.imagesArray[this.index]);
      this.index++;
    }
  }

  handleClicks() {
    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", () => {
      this.nextSlide();
    });
  }
}
