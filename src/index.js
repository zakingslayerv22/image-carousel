import "./index.css";
import ImageOne from "./images/1.png";
import ImageTwo from "./images/2.png";
import ImageThree from "./images/3.png";
import { ImageCarousel } from "./image-carousel-module/image-carousel-module";

const imageOneContainer = document.querySelector(".number-one");

const imageOne = new Image();
imageOne.src = ImageOne;
imageOne.classList.add("image-one", "image");

const imageOneCaption = document.createElement("div");
imageOneCaption.classList.add("image-caption");
imageOneCaption.textContent = "Image One";

imageOneContainer.append(imageOne, imageOneCaption);

const imageTwoContainer = document.querySelector(".number-two");

const imageTwo = new Image();
imageTwo.src = ImageTwo;
imageTwo.classList.add("image-two", "image");

const imageTwoCaption = document.createElement("div");
imageTwoCaption.classList.add("image-caption");
imageTwoCaption.textContent = "Image Two";

imageTwoContainer.append(imageTwo, imageTwoCaption);

const imageThreeContainer = document.querySelector(".number-three");

const imageThree = new Image();
imageThree.src = ImageThree;
imageThree.classList.add("image-three", "image");

const imageThreeCaption = document.createElement("div");
imageThreeCaption.classList.add("image-caption");
imageThreeCaption.textContent = "Image Three";

imageThreeContainer.append(imageThree, imageThreeCaption);

window.onload = () => {
  new ImageCarousel();
};
