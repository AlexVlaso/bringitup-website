import Player from "./modules/player";
import Slider from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const slider = new Slider(".page", ".next");
  slider.render();
  const player = new Player(".showup .play", ".overlay");
  player.init();
});
