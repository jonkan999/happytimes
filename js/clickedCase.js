import { carousel } from "/js/carousel.js";

$(document).on("click", function (event) {
  const clickedCard = event.target.closest(".customer-case-card");
  let clickedClone = false;
  if (clickedCard) {
    if (clickedCard.classList.contains("clone")) {
      clickedClone = true;
    }
  }

  // Check if a customer-case-card div is clicked
  if (
    clickedCard &&
    !clickedCard.classList.contains("clone") &&
    !$(".clone").length
  ) {
    $(".customer-case-card").addClass("no-hover");
    // add the clone div
    let original = $(event.target.closest(".customer-case-card"));
    let clone = original.clone();
    clone.addClass("clicked");
    clone.addClass("clone");
    original.after(clone);
    clone.css("height", "auto");

    $(".clone .hidden-paragraph").css("display", "block");

    // get the ID name of clicked element
    const idName = original.attr("id");
    $(".clone .project-image").remove();
    $(".clone .preload-images").remove();

    //get info element containing how many images to load
    const numImages = clickedCard.dataset.numImages;
    const placeholderSrc = "/images/placeholder.jpg"; // Add the path to your placeholder image

    let images = "";
    for (let i = 1; i <= numImages; i++) {
      const src = `/images/${idName}/${idName}-${i}.jpg`;

      images += `<img class="lazy hidden-image unloaded-image" data-src="${src}" src="${placeholderSrc}" alt="Image ${i}">`;
    }

    $(".clone .carousel-placeholder").html(
      `<div class="carousel">${images}</div>`
    );

    $(".clone .hidden-image").removeClass("hidden-image").css("z-index", "10");

    const loadImg = (image) => {
      const src = image.getAttribute("data-src");
      if (!src) return;
      image.src = src;
      image.onload = () => {
        image.classList.remove("unloaded-image");
        image.classList.add("loaded-image");
      };
      image.removeAttribute("data-src");
    };

    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImg(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "0px 0px 0px 0px", // Adjust this value to load images before they are visible
    });

    document.querySelectorAll(".lazy").forEach((img) => {
      observer.observe(img);
    });

    carousel();

    /* fade out all other cards */
    $(".customer-case-card:not(.clicked)").css("opacity", "0.2");
    $("#caseHeader").css("opacity", "0.2");
    $(".header-container").css("opacity", "0.5");
  } else if ($(".clone").length && !clickedClone) {
    // Remove the clone div
    $(".clone").remove();
    $(".customer-case-card").removeClass("clicked");
    $(".customer-case-card:not(.clicked)").css("opacity", "1");
    $("#caseHeader").css("opacity", "1");
    $(".customer-case-card").removeClass("no-hover");
    $(".hidden-paragraph").css("display", "none");
    $(".header-container").css("opacity", "0.9");
  } else {
    // Do nothing
  }
});
