$(function () {
  // jQuery goes here...

  gsap.to(".image-logo", {
    duration: 2,
    x: 300,
    backgroundColor: "purple",
    border: "4px solid white",
    borderRadius: "20%",
  });

  emergence.init({
    elemCushion: 0.5,
  });

  $(document).ready(function () {
    $(".paroller").paroller();
  });

  $(".slider").slick({
    dots: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // $(".page-title").fadeIn(2000).fadeOut(1000).fadeIn(1500);

  const button = document.querySelector("#button");
  const tooltip = document.querySelector("#tooltip");

  // Pass the button, the tooltip, and some options, and Popper will do the
  // magic positioning for you:
  Popper.createPopper(button, tooltip, {
    placement: "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [5, 10],
        },
      },
    ],
  });

  $(button).click(() => {
    $(tooltip).fadeToggle(500);
  });

  $(".background1").paroller({
    factor: 0.5,
  });

  $(".background2").paroller({
    factor: -0.5,
  });

  $(".background3").paroller({
    factor: -0.15,
    direction: "horizontal",
  });

  $(".background4").paroller({
    factor: 0.3,
    direction: "horizontal",
  });

  $(".background5").paroller({
    factor: -0.5,
    direction: "horizontal",
  });
});
