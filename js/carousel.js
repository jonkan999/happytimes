export function carousel() {
  console.log("runs");
  $(document).ready(function () {
    $(".carousel").slick({
      /* autoplay: true,
      autoplaySpeed: 2000, */
      /* arrows: true, */
      dots: true,
      /* adaptiveHeight: true, */
      nextArrow: `<div class="nextArrow slick-next">
          <ion-icon class="slickArrow"  name="chevron-forward-outline"></ion-icon>
         </div>`,
      prevArrow: `<div class="prevArrow slick-prev">
         <ion-icon class="slickArrow"  name="chevron-back-outline"></ion-icon>
        </div>`,
    });
    /*     function addImageCounter() {
      // Get the total number of images in class "slick-track"
      const slickTrack = document.querySelector(".slick-track");
      const totalImages = slickTrack.querySelectorAll("img").length;

      // Get the current image in order that has the class "slick-active"
      const currentImage = slickTrack.querySelector(".slick-active");
      const currentImageIndex =
        Array.from(slickTrack.children).indexOf(currentImage) + 1;

      // Remove the old image counter element if it exists
      const oldImagesCounter = document.querySelector(".imageCounter");
      if (oldImagesCounter) {
        oldImagesCounter.remove();
      }

      // Create the new HTML element with the current image and total images
      const imagesCounter = document.createElement("div");
      imagesCounter.classList.add("imageCounter");
      imagesCounter.innerText = currentImageIndex - 1 + "/" + totalImages;

      // Add the new HTML element as a child of class "carousel"
      const carousel = document.querySelector(".carousel");
      carousel.appendChild(imagesCounter);
    }

    // Add the image counter when the carousel is initialized
    addImageCounter();

    // Add the image counter as a listener to the prevArrow and nextArrow buttons
    const prevArrow = document.querySelector(".slick-prev");
    const nextArrow = document.querySelector(".slick-next");

    prevArrow.addEventListener("click", addImageCounter);
    nextArrow.addEventListener("click", addImageCounter); */
  });
}

/* function addImageCounter() {
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
} */
