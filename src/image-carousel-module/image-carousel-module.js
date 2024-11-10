export class ImageCarousel {
  constructor() {
    this.allImages = document.querySelectorAll(".slide");
    this.imagesArray = [...this.allImages];
    this.pictureFrame = document.querySelector(".picture-frame");

    if (this.imagesArray.length > 1) this.initialize();
  }

  initialize() {
    this.pictureFrame.append(this.imagesArray[0]);
  }
}
