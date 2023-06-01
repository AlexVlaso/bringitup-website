import Slider from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const slider = new Slider(".page", ".next");
  slider.render();
});
