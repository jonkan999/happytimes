export function carousel() {
  console.log("runs");
  $(document).ready(function () {
    $(".carousel").slick({
      /* autoplay: true,
      autoplaySpeed: 2000, */
      arrows: false,
      dots: true,
    });
  });
}
