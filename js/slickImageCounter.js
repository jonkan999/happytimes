// Get the total number of images in class "slick-track"
const slickTrack = document.querySelector(".slick-track");
const totalImages = slickTrack.querySelectorAll("img").length;

// Get the current image in order that has the class "slick-active"
const currentImage = slickTrack.querySelector(".slick-active");
const currentImageIndex =
  Array.from(slickTrack.children).indexOf(currentImage) + 1;

// Create the new HTML element with the current image and total images
const imagesCounter = document.createElement("div");
imagesCounter.classList.add("imageCounter");
imagesCounter.innerText = currentImageIndex + "/" + totalImages;

// Add the new HTML element as a child of class "carousel"
const carousel = document.querySelector(".carousel");
carousel.appendChild(imagesCounter);
