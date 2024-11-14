export class ImageCarousel {
  constructor() {
    this.allImages = document.querySelectorAll(".slide");
    this.imagesArray = [...this.allImages];
    this.pictureFrame = document.querySelector(".picture-frame");
    this.oldImageIndex = 0;
    this.index = 0;

    if (this.imagesArray.length > 1) this.initialize();
  }

  initialize() {
    this.pictureFrame.append(this.imagesArray[0]);
    this.handleClicks();
  }

  nextSlide() {
    this.index += 1;

    if (this.index < this.imagesArray.length) {
      this.pictureFrame.textContent = "";
      this.pictureFrame.append(this.imagesArray[this.index]);
      this.reappendImageToImagesContainer(this.oldImageIndex);
      this.oldImageIndex++;
    }

    this.resetIndex();

    console.log(`Next - Current index: ${this.index}`);
  }

  handleClicks() {
    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", () => {
      this.nextSlide();
    });
  }

  reappendImageToImagesContainer(imageIndex) {
    const slideImagesContainer = document.querySelector(
      ".slide-images-container",
    );
    slideImagesContainer.append(this.imagesArray[imageIndex]);
  }

  resetIndex() {
    if (this.index === this.imagesArray.length)
      this.index = this.imagesArray.length - 1;
  }
}
