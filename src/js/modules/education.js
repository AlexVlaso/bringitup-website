export default class Education {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    try {
      this.items = this.container.querySelectorAll(".officer__card-item");
      this.addTrigger = this.container.querySelector(".plus");
    } catch (e) {}
    this.curItem = 0;
  }
  hideItems() {
    this.items.forEach((item, i, arr) => {
      if (i === arr.length - 1) {
        return;
      }
      item.style.display = "none";
    });
  }
  bindTrigger() {
    this.addTrigger.addEventListener("click", () => {
      if (this.curItem === this.items.length - 2) {
        this.items[this.items.length - 1].style.display = "none";
      }
      this.items[this.curItem].style.display = "flex";
      this.curItem++;
    });
  }
  init() {
    try {
      this.hideItems();
      this.bindTrigger();
    } catch (e) {}
  }
}
