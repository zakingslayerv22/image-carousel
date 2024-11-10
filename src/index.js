import "./index.css";
import ImageOne from "./images/1.png";
import ImageTwo from "./images/2.png";
import ImageThree from "./images/3.png";
import { ImageCarousel } from "./image-carousel-module/image-carousel-module";

const pictureFrame = document.querySelector(".picture-frame");
const slideImagesContainer = document.querySelector(".slide-images-container");

const imageOne = new Image();
imageOne.src = ImageOne;
imageOne.classList.add("image-one", "slide");

const imageTwo = new Image();
imageTwo.src = ImageTwo;
imageTwo.classList.add("image-two", "slide");

const imageThree = new Image();
imageThree.src = ImageThree;
imageThree.classList.add("image-three", "slide");

slideImagesContainer.append(imageOne, imageTwo, imageThree);

window.onload = () => {
  new ImageCarousel();
};
