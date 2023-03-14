const parallax = document.querySelector(".parallax");

console.log(parallax[0]);

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  console.log(-15 + offset * 0.115);
  parallax.style.backgroundPositionY = -15 + offset * 0.115 + "vh";
  // DIV 1 background will move slower than other elements on scroll.
});

// Get the border and image elements
const border = document.querySelector(".header-container");
const image = document.querySelector(".foreground-image");
const header = document.querySelector(".main-header");
const headerBottom = document.querySelector(".double-line-bottom");
/* console.log(separator); */

// Listen for the scroll event
window.addEventListener("scroll", function () {
  // Get the position of the border, header, and image
  const borderRect = border.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();
  const headerBottomRect = headerBottom.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();

  // Check if the border is overlapping with the header, headerBottom, or image
  if (
    (borderRect.bottom > headerRect.top &&
      borderRect.top < headerRect.bottom) ||
    (borderRect.bottom > headerBottomRect.top &&
      borderRect.top < headerBottomRect.bottom) ||
    (borderRect.bottom > imageRect.top && borderRect.top < imageRect.bottom)
  ) {
    // Calculate the amount of overlap for the header, headerBottom, and image
    const headerOverlap =
      Math.min(borderRect.bottom, headerRect.bottom) -
      Math.max(borderRect.top, headerRect.top);
    const headerBottomOverlap =
      Math.min(borderRect.bottom, headerBottomRect.bottom) -
      Math.max(borderRect.top, headerBottomRect.top);
    const imageOverlap =
      Math.min(borderRect.bottom, imageRect.bottom) -
      Math.max(borderRect.top, imageRect.top);

    // Check if the overlap is less than the height of the element
    if (headerOverlap < headerRect.height) {
      // Calculate the distance from the top of the header to the bottom of the border
      const distance = borderRect.bottom - headerRect.top;

      // Set the clip-path property to hide the part of the header behind the border
      header.style.clipPath = `inset(${distance}px 0 0 0)`;
    }
    console.log(headerBottomRect.height);
    console.log(headerBottomOverlap);
    if (headerBottomOverlap >= headerBottomRect.height) {
      // Calculate the distance from the top of the headerBottom to the bottom of the border

      // Set the clip-path property to hide the part of the headerBottom behind the border
      /* headerBottom.style.clipPath = `inset(${distance}px 0 0 0)`; */
      headerBottom.style.opacity = "0";
      aboutHeader.style.opacity = "1";
      setTimeout(function () {
        // code to be executed after 0.4 seconds
        aboutText_1.style.display = "block";
        setTimeout(function () {
          // code to be executed after 0.4 seconds
          aboutText_2.style.display = "block";
        }, 200);
      }, 400);
      console.log("turn on");
      // Set the background image properties
      border.style.backgroundImage = 'url("../background.jpg")';
      border.style.backgroundSize = "cover";
      border.style.backgroundRepeat = "no-repeat";
      border.style.backgroundPositionY = "88.845 vh";
    } else {
      headerBottom.style.opacity = "1";
      aboutHeader.style.opacity = "0";
      aboutText_1.style.display = "none";
      aboutText_2.style.display = "none";
      border.style.backgroundImage = "none";
      console.log("close");
    }

    if (imageOverlap < imageRect.height) {
      // Calculate the distance from the top of the image to the bottom of the border
      const distance = borderRect.bottom - imageRect.top;

      // Set the clip-path property to hide the part of the image behind the border
      image.style.clipPath = `inset(${distance}px 0 0 0)`;
    }
  } else {
    // Reset the clip-path property if there is no overlap

    header.style.clipPath = "initial";

    image.style.clipPath = "initial";
  }
});
