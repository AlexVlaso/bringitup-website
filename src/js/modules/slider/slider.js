export default class Slider {
  constructor({
    main = null,
    next = null,
    prev = null,
    animate,
    activeClass = "",
  }) {
    this.nextBtns = document.querySelectorAll(next);
    this.prevBtns = document.querySelectorAll(prev);
    this.mainBlock = document.querySelector(main);
    this.activeClass = activeClass;
    this.curSlide = 0;
    this.animate = animate;
    this.slides = this.filterNodes(this.mainBlock.children);
  }
  filterNodes(nodeCollection) {
    const resultArr = [];
    for (let i = 0; i < nodeCollection.length; i++) {
      if (nodeCollection[i].nodeName === "BUTTON") {
        continue;
      }
      resultArr.push(nodeCollection[i]);
    }
    return resultArr;
  }
}
