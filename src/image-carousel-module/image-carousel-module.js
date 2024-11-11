export class ImageCarousel {
  constructor() {
    this.allImages = document.querySelectorAll(".slide");
    this.imagesArray = [...this.allImages];
    this.pictureFrame = document.querySelector(".picture-frame");
    this.oldImageIndex = 0;
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
      this.reappendImageToImagesContainer(this.oldImageIndex);
      this.oldImageIndex++;
      this.index++;
    }
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
}
