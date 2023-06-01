export default class Slider {
  constructor(pageSelector, btnSelector) {
    this.btns = document.querySelectorAll(btnSelector);
    this.page = document.querySelector(pageSelector);
    this.slides = this.page.children;
    this.curSlide = 1;
  }
  showSlide(i) {
    this.curSlide += i;
    if (this.curSlide > this.slides.length) {
      this.curSlide = 1;
    }
    if (this.curSlide < 1) {
      this.curSlide = this.slides.length;
    }
    this.slides.forEach((element) => {
      element.style.display = "none";
    });
    this.slides[this.curSlide - 1].style.display = "block";
  }

  render() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.showSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.curSlide = 0;
        this.showSlide(1);
      });
    });
  }
}
