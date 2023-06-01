import Player from "./modules/player";
import MainSlider from "./modules/slider/main_slider";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const slider = new MainSlider({ main: ".page", next: ".next" });
  slider.render();
  const player = new Player(".showup .play", ".overlay");
  player.init();
});
