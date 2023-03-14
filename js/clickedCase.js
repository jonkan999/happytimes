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
    $(".clone .carousel-placeholder").html(`
    <div class="carousel">
      <img src="/images/${idName}-main.jpg" alt="Image 1">
      <img src="/images/nobelberget-2.jpg" alt="Image 2">
      <img src="/images/nobelberget-3.jpg" alt="Image 3">
    </div>

    `);

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
