import Education from "./modules/education";
import Form from "./modules/form";
import Player from "./modules/player";
import MainSlider from "./modules/slider/main_slider";
import MiniSlider from "./modules/slider/mini_slider";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const mainSlider = new MainSlider({ main: ".page", next: ".next" });
  mainSlider.render();
  const showupSlider = new MiniSlider({
    main: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    animate: true,
    activeClass: "card-active",
  });
  showupSlider.init();
  const moduleSlider = new MiniSlider({
    main: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    animate: true,
    activeClass: "card-active",
    autoplay: true,
  });
  moduleSlider.init();
  const feedSlider = new MiniSlider({
    main: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
    activeClass: "feed__item-active",
  });
  feedSlider.init();
  const player = new Player(".showup .play", ".overlay");
  player.init();
  const educationOld = new Education(".officerold");
  const educationNew = new Education(".officernew");
  educationOld.init();
  educationNew.init();
  const forms = new Form(".form");
  forms.init();
});
