import Slider from "./slider";
export default class MainSlider extends Slider {
  showSlide(i) {
    this.curSlide += i;
    if (this.curSlide >= this.slides.length) {
      this.curSlide = 0;
    }
    if (this.curSlide < 0) {
      this.curSlide = this.slides.length - 1;
    }
    this.slides.forEach((element) => {
      element.style.display = "none";
    });
    if (this.curSlide === 2) {
      try {
        const popUp = document.querySelector(".hanson");
        popUp.style.opacity = 0;
        setTimeout(() => {
          popUp.style.opacity = 1;
          popUp.classList.add("animated", "slideInUp");
        }, 3000);
      } catch (e) {}
    }
    this.slides[this.curSlide].style.display = "block";
  }
  bindTriggers() {
    try {
      this.nextBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.showSlide(1);
        });
        btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
          e.preventDefault();
          this.curSlide = 0;
          this.showSlide(0);
        });
      });
      this.prevBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.showSlide(-1);
        });
      });
    } catch (e) {}
  }

  render() {
    if (this.mainBlock) {
      this.bindTriggers();
    }
  }
}
