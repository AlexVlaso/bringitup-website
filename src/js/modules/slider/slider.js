export default class Slider {
  constructor({ main = "", next = "", prev = "" }) {
    this.nextBtns = document.querySelectorAll(next);
    this.mainBlock = document.querySelector(main);
    this.slides = this.mainBlock.children;
    this.curSlide = 1;
  }
}
