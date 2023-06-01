import Slider from "./slider";
export default class MainSlider extends Slider {
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
    if (this.curSlide === 3) {
      try {
        const popUp = document.querySelector(".hanson");
        popUp.style.opacity = 0;
        setTimeout(() => {
          popUp.style.opacity = 1;
          popUp.classList.add("animated", "slideInUp");
        }, 3000);
      } catch (e) {}
    }
    this.slides[this.curSlide - 1].style.display = "block";
  }

  render() {
    this.nextBtns.forEach((btn) => {
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
